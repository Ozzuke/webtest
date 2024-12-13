import axios from 'axios';
import store from '@/store';

// Create an instance of axios
const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to include JWT token in headers
api.interceptors.request.use(
  config => {
    const token = store.state.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle responses and errors
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
      store.dispatch('logout');
    }
    return Promise.reject(error);
  }
);

export default api;
