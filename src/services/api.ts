import axios from 'axios';

const API_BASE_URL = 'https://your-backend-url.com';

// Fetch data from backend
export async function fetchData() {
  try {
    const response = await axios.get(`${API_BASE_URL}/data-endpoint`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error appropriately
    return null;
  }
}
