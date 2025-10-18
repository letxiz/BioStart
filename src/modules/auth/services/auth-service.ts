import { api } from "@/config";
import { LoginParams } from "../interfaces";

export const loginService = async (params: LoginParams): Promise<any> => {
  const response = await api.post("/auth/login-firestore", params);
  return response.data;
};
