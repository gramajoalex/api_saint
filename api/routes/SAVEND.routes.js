import { Router } from "express";
import { SAVENDController } from "controllers/SAVEND.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SAVENDController.getAll
  );

  return router;
};
