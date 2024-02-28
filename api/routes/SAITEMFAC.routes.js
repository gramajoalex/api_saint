import { Router } from "express";
import { SAITEMFACController } from "controllers/SAITEMFAC.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SAITEMFACController.getAll
  );

  return router;
};
