import axios from "axios";

const api = axios.create({
    baseURL : "https://bookstore-production-1.onrender.com",
    // baseURL : "http://localhost:8080",
})

export default api;