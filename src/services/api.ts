import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const API_BASE_URL = "http://localhost:8080/api"; // Base URL for API

// Create Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig<unknown>) => {
    const token = localStorage.getItem("authToken"); // Retrieve access token
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor for handling errors and refreshing tokens
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken"); // Retrieve refresh token
        if (!refreshToken) {
          throw new Error("Refresh token is missing.");
        }

        // Request a new token using the refresh token
        const { data } = await axios.post(`${API_BASE_URL}/auth/refresh`, {
          refreshToken,
        });

        // Store the new tokens
        localStorage.setItem("authToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        // Retry the original request with the new token
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        }
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);

        // Clear tokens and redirect to login on failure
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    console.error("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Fetch data from the backend
export async function fetchData<T>(endpoint: string): Promise<T> {
  try {
    const response = await apiClient.get<T>(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ensure proper error propagation
  }
}

// Example POST method
export async function postData<T, R>(endpoint: string, payload: T): Promise<R> {
  try {
    const response = await apiClient.post<R>(endpoint, payload);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error; // Ensure proper error propagation
  }
}

// Example DELETE method
export async function deleteData<R>(endpoint: string): Promise<R> {
  try {
    const response = await apiClient.delete<R>(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error; // Ensure proper error propagation
  }
}

// Example PUT method
export async function putData<T, R>(endpoint: string, payload: T): Promise<R> {
  try {
    const response = await apiClient.put<R>(endpoint, payload);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error; // Ensure proper error propagation
  }
}

export default apiClient;
