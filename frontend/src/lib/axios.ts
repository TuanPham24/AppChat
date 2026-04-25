import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";

export const api = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
    withCredentials: true,
});

// Gan access token vao req header
api.interceptors.request.use((config)=>{
    const {accessToken} = useAuthStore.getState();
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;  
});

export default api;