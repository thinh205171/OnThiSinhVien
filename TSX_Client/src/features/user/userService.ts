import axios, { AxiosResponse } from "axios";
import { base_url } from "../../utils/baseUrl.ts";
import { config } from "../../utils/axiosConfig.ts";
import { LoginData, RegisterData, UpdateData } from "./model.ts";

const register = async (userData: RegisterData): Promise<any> => {
  const res: AxiosResponse = await axios.post(
    `${base_url}auth/register`,
    userData,
    config,
  );
  if (res.data) {
    return res.data;
  }
};

const login = async (userData: LoginData): Promise<any> => {
  const res: AxiosResponse = await axios.post(
    `${base_url}auth/login`,
    userData,
    config,
  );
  if (res.data) {
    return res.data;
  }
};

const validateToken = async (): Promise<any> => {
  const res: AxiosResponse = await axios.get(
    `${base_url}auth/validate-token`,
    config,
  );
  if (res.data) {
    return res.data;
  }
};

const updateUser = async (userData: UpdateData): Promise<any> => {
  const res: AxiosResponse = await axios.put(
    `${base_url}user/update`,
    userData,
    config,
  );
  if (res.data) return res.data;
};

const logout = async (): Promise<any> => {
  const res: AxiosResponse = await axios.get(`${base_url}user/logout`, config);
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
