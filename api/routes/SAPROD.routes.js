import { Router } from "express";
import { SAPRODController } from "../controllers/SAPROD.controller.js";

const router = Router();

export default (passport) => {
  router.get(
    "/all",
    passport.authenticate("jwt", { session: false }),
    SAPRODController.getAll
  );

  return router;
};
