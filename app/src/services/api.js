import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ampara-api.herokuapp.com',
});

export default api;