import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:40000',
    headers: { 
        'Accept-Control-Allow-Origin': '*',
        'Accept': 'application/json'
    }
})
export default api;