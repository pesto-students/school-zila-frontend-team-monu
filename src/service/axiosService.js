import axios from "axios";
axios.defaults.withCredentials = true;

// instance.defaults.header.common['Authorization'] = 'AUTH TOKEN FROM'

const serviceAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVICEABILITY_BASE_URL,
  timeout: 20000,
  timeoutErrorMessage: `Unable to Get Data from ${process.env.REACT_APP_SERVICEABILITY_BASE_URL}`,
  headers: {
    Authorization: `<Your Auth Token>`,
    "Content-Type": "application/json",
    timeout: 20000,
  },
});

export default serviceAxiosInstance;
