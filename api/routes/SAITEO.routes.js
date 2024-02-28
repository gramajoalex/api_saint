import { Router } from "express";
import { SAITEOController } from "controllers/SAITEO.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SAITEOController.getAll
  );

  return router;
};
