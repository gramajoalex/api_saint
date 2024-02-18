import { Router } from "express";

import auth from "./auth.routes.js";
// import home from "./home.routes.js";

const router = Router();

export default () => {
    router.use("/auth", auth());
    //   router.use("/home", home());
  return router;
};
