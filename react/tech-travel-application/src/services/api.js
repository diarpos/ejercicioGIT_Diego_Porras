import axios from "axios";

const api = axios.create({
    baseURL: 'https://6285cd27f0e8f0bb7c09baad.mockapi.io/'
});

export default api;