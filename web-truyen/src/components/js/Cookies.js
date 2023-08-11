import Cookies from "js-cookie";

export const getToken = () => {
  return Cookies?.get('token') ?? null;
}
export const setToken = (token) => {
  Cookies.set('token', token);
}
export const getRefreshToken = () => {
  return Cookies?.get('refreshToken');
}
export const setRefreshToken = (refresh_token) => {
  Cookies.set('refreshToken', refresh_token);
}
export const removeToken = () => {
  return Cookies?.remove('token');
}
export const removeRefreshToken = () => {
  return Cookies?.remove('refreshToken');
}
