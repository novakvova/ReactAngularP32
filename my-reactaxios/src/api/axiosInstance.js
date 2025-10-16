import axios from "axios";
import {API_URL} from "./apiConfig";

const axiosInstance = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;