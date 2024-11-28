import axios from "axios";

const API_BASE_URL = "https://your-backend-url.com";

// Create Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor for adding authentication tokens
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Assuming token is stored in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor for handling errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response?.data || error.message);
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

// Fetch data from the backend
export async function fetchData(endpoint: string) {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Example POST method
export async function postData(endpoint: string, payload: any) {
  try {
    const response = await apiClient.post(endpoint, payload);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
}

export default apiClient;
