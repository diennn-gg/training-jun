import axios from "axios";
import { getToken } from "./Cookies";

export const axiosPublic = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ---------- REQUEST -------------
axiosPublic.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ---------- RESPONSE -------------
// axiosPublic.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const originalRequest = error.config;
//     console.log(error);
//     if (error.response.status === 401 && getRefreshToken()) {
//       console.log('401');
//     }
//     return Promise.reject(error);
//   }
// );
