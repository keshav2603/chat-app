import axios from 'axios';

// Set the base URL for the Axios instance
const api = axios.create({
  baseURL: 'https://chat-app-ufpp.onrender.com',
});

export default api;