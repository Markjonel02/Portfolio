import axios from "axios";

// Get API URL from your Vite environment variables. Use empty string fallback
// so relative requests target the app origin when env var is not provided.
const API_URL =
  import.meta.env.VITE_API_URL || "https://portfolio-assests-bay.vercel.app/";

const axiosInstance = axios.create({
  baseURL: API_URL, // falls back to '' -> same origin
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosInstance;
