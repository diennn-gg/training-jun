import axios from "axios";
import jwt_decode from 'jwt-decode';
import { getToken, setToken, getRefreshToken, setRefreshToken, removeToken } from "./Cookies";

const baseURL = process.env.REACT_APP_API_BASE_URL;
export const axiosPublic = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ---------- REQUEST -------------
axiosPublic.interceptors.request.use(
  async (config) => {
    let accessToken = getToken();
    if (accessToken) {
      const currentDate = new Date().getTime();
      const decodedToken = jwt_decode(accessToken).exp * 1000;
      if(decodedToken < currentDate) {
        await axios.post(`${baseURL}/auth/refresh-tokens`, { refreshToken: getRefreshToken()})
          .then((response) => {
            accessToken = response.data.access.token;
            setToken(response.data.access.token);
            setRefreshToken(response.data.refresh.token);
          })
          .catch((e) => {
            return config;
          })
      }
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {return Promise.reject(error)}
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
