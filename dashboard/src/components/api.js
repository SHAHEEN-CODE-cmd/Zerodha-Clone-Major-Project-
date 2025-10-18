import axios from "axios";

const API = axios.create({
  baseURL: "https://zerodha-clone-major-project-2.onrender.com/"
});

export default API;
