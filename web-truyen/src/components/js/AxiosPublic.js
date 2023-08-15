import axios from "axios";
import jwt_decode from 'jwt-decode';
import { getToken, setToken, getRefreshToken, setRefreshToken } from "./Cookies";

const baseURL = process.env.REACT_APP_API_BASE_URL;
export const axiosPublic = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ---------- REQUEST -------------
let isRefreshing = false;
axiosPublic.interceptors.request.use(
  async (config) => {
    let accessToken = getToken();
    if (accessToken) {
      if(jwt_decode(accessToken).exp * 1000 < new Date().getTime() && !isRefreshing) {
        isRefreshing = true;
        await axios.post(`${baseURL}/auth/refresh-tokens`, { refreshToken: getRefreshToken()})
          .then((response) => {
            accessToken = response.data.access.token;
            setToken(response.data.access.token);
            setRefreshToken(response.data.refresh.token);
          })
          .catch((e) => {
            return config;
          })
          .finally(() => {
            isRefreshing = false;
          });
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
  (error) => {return Promise.reject(error)}
);
