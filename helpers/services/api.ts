import axios from "axios";

const API = axios.create({
  baseURL: "api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default API;
