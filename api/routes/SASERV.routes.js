import { Router } from "express";
import { SASERVController } from "controllers/SASERV.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SASERVController.getAll
  );

  return router;
};
