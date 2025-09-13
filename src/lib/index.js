import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const clinet = axios.create({
  baseURL,
});

export { clinet };
