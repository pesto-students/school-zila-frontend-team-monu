import axios from "axios";
import {baseUrl} from "../config";
// axios.defaults.withCredentials = true;

// instance.defaults.header.common['Authorization'] = 'AUTH TOKEN FROM'
let token = localStorage.getItem("token");
const serviceAxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
  timeoutErrorMessage: `Unable to Get Data from ${process.env.REACT_APP_SERVICEABILITY_BASE_URL}`,
  headers: {
    Authorization: token?`Bearer ${token}`:null,
    "Content-Type": "application/json",
    timeout: 20000,
  },
});

export default serviceAxiosInstance;
