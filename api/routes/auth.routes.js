import { Router } from "express";
import { AuthController } from "../controllers/Auth.controller.js";

const router = Router();

export default (passport) => {
  router.post(
    "/login",
    AuthController.login
  );

  return router;
};
