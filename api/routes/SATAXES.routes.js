import { Router } from "express";
import { SATAXESController } from "controllers/SATAXES.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SATAXESController.getAll
  );

  return router;
};
