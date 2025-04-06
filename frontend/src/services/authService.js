import axios from "axios";
const API_URL = "http://localhost:5000/api/auth/";

export const register = (userData) => axios.post(`${API_URL}register`, userData, { withCredentials: true });
export const login = (userData) => axios.post(`${API_URL}login`, userData, { withCredentials: true });
export const refreshAccessToken = () => axios.post(`${API_URL}refresh`, {}, { withCredentials: true });
export const logout = () => axios.post(`${API_URL}logout`, {}, { withCredentials: true });
