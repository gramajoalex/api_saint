import { Router } from "express";
import { SAFACTController } from "controllers/SAFACT.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SAFACTController.getAll
  );

  return router;
};
