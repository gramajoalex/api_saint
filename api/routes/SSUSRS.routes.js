import { Router } from "express";
import { SSUSRSController } from "controllers/SSUSRS.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SSUSRSController.getAll
  );

  return router;
};
