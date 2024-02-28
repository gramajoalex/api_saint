import { Router } from "express";
import { SATAXITFController } from "controllers/SATAXITF.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SATAXITFController.getAll
  );

  return router;
};
