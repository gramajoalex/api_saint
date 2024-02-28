import { Router } from "express";
import { SACLIEController } from "controllers/SACLIE.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SACLIEController.getAll
  );

  return router;
};
