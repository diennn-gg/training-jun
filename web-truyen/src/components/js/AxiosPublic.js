import axios from "axios";
import jwt_decode from 'jwt-decode';
import { getToken, setToken, getRefreshToken, setRefreshToken, removeToken } from "./Cookies";

export const axiosPublic = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ---------- REQUEST -------------
axiosPublic.interceptors.request.use(
  async (config) => {
    let accessToken = getToken();
    if (accessToken) {
      const decodedToken = jwt_decode(accessToken);
      if(decodedToken.exp * 1000 < new Date().getTime()) {
        const refreshToken = getRefreshToken();
        await axiosPublic.post('auth/refresh-tokens', JSON.stringify({ refreshToken: refreshToken}))
          .then((response) => {
            accessToken = response.data.access.token;
            setToken(response.data.access.token);
            setRefreshToken(response.data.refresh.token);
          })
          .catch((e) => {
            removeToken();
          })
      }
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ---------- RESPONSE -------------
axiosPublic.interceptors.response.use(
  (response) => response,
  async (error) => {
    // const originalRequest = error.config;
    // if (error.response?.status === 401 && error.response.data.message === "Please authenticate" && getRefreshToken()) {
    //   const refreshToken = getRefreshToken();
    //   let data = JSON.stringify({ refreshToken: refreshToken});
    //   await axiosPublic.post('auth/refresh-tokens', data)
    //     .then((response) => {
    //       setToken(response.data.access.token);
    //       setRefreshToken(response.data.refresh.token);
    //       originalRequest.headers.Authorization = `Bearer ${response.data.access.token}`;
    //       return axiosPublic(originalRequest);
    //     })
    //     .catch((err) => {
    //       removeToken();
    //     });
    // }
    return Promise.reject(error);
  }
);
