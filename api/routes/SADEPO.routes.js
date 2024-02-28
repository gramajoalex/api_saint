import { Router } from "express";
import { SADEPOController } from "controllers/SADEPO.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SADEPOController.getAll
  );

  return router;
};
