import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
    crossdomain: true,
  },
});

request.interceptors.request.use((config) => {
  config.headers["x_secret_key"] = "SECRET_KEY";
  return config;
});
export default request;
