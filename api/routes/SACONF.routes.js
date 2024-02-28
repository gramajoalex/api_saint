import { Router } from "express";
import { SACONFController } from "controllers/SACONF.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SACONFController.getAll
  );

  return router;
};
