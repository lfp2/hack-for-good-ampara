import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hack-for-good-hug.rj.r.appspot.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
