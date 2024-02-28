import { Router } from "express";
import { SAOFERController } from "controllers/SAOFER.controller";

const router = Router();

export default (passport) => {
  router.get(
    "",
    // passport.authenticate("jwt", { session: false }),
    SAOFERController.getAll
  );

  return router;
};
