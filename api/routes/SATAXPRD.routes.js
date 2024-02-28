import { Router } from "express";
import { SATAXPRDController } from "controllers/SATAXPRD.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SATAXPRDController.getAll
  );

  return router;
};
