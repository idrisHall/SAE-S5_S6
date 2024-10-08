import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // URL de base de votre API
  withCredentials: false, // Ceci est optionnel
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  fetchArticles() {
    return apiClient.get('/articles');
  },
};
