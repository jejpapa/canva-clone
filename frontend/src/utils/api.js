import axios from 'axios';

const local_api = 'http://localhost:5000';
const production_api = '';

const token = localStorage.getItem('canva_token');

let baseURL = local_api; // Default to production

if (process.env.NODE_ENV !== 'development') {
  baseURL = production_api; // Override with local if not production
}


const api = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
  withCredentials: true,
});

export default api;