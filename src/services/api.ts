import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wine-back-test.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
