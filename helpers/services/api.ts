import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3004/",
  headers: {
    Accept: "application/json",
  },
});

export default API;
