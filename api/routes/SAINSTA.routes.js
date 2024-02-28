import { Router } from "express";
import { SAINSTAController } from "controllers/SAINSTA.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SAINSTAController.getAll
  );

  return router;
};
