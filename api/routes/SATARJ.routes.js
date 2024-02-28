import { Router } from "express";
import { SATARJController } from "controllers/SATARJ.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SATARJController.getAll
  );

  return router;
};
