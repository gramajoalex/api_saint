import { Router } from "express";
import { SATAXSRVController } from "controllers/SATAXSRV.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SATAXSRVController.getAll
  );

  return router;
};
