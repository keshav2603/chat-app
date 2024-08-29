import axios from 'axios';

// Set the base URL for the Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
});

export default api;