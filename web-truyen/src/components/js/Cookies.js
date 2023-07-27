import Cookies from "js-cookie";

export const getToken = () => {
  return Cookies?.get('token') ?? null;
}
export const setToken = (token) => {
  return Cookies?.set('token', token) ?? null;
}
export const removeToken = () => {
  return Cookies?.remove('token');
}
export const getRefreshToken = () => {
  return Cookies?.get('refreshToken') ?? null;
}
export const setRefreshToken = (refresh_token) => {
  return Cookies?.set('refreshToken', refresh_token) ?? null;
}
