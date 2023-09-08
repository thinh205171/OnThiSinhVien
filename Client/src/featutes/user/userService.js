import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const register = async (userData) => {
  const res = await axios.post(`${base_url}auth/register`, userData, config);
  if (res.data) {
    return res.data;
  }
};

const login = async (userData) => {
  const res = await axios.post(`${base_url}auth/login`, userData, config);
  if (res.data) {
    return res.data;
  }
};

const validateToken = async () => {
  const res = await axios.get(`${base_url}auth/validate-token`, config);
  if (res.data) {
    return res.data;
  }
};

const updateUser = async (userData) => {
  const res = await axios.put(`${base_url}user/update`, userData, config);
  if (res.data) return res.data;
};

const logout = async () => {
  const res = await axios.get(`${base_url}user/logout`, config);
  if (res.data) {
    // window.location.reload(true);
    return res.data;
  }
};

export const authService = {
  register,
  login,
  updateUser,
  validateToken,
  logout,
};
