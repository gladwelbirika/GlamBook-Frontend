import axios from "axios";

const api = axios.create({
  baseURL: "https://glambook-backend-ucbr.onrender.com/api/",
});

export default api;