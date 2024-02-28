import { Router } from "express";
import { SATAXVTAController } from "controllers/SATAXVTA.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SATAXVTAController.getAll
  );

  return router;
};
