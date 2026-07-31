import axios from "axios";

const api = axios.create({
  baseURL: "https://glambook-backend-live.onrender.com/api/",
});

export default api;