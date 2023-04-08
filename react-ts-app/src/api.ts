import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/products",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});
export default axiosInstance;
