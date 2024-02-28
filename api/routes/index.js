import { Router } from "express";

import auth from "./auth.routes.js";
import products from "./SAPROD.routes.js";
import clients from "./SACLIE.routes.js";

const router = Router();

export default (passport) => {
  router.use("/auth", auth(passport));
  router.use("/products", products(passport));
  router.use("/clients", clients(passport));
  return router;
};
