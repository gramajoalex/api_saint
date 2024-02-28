import { Login } from "../services/auth/login.js";

export const AuthController = {
  async login(req, res) {
    return Login(req, res);
  },
};
