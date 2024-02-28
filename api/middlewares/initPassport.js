import passport from "passport";

// Project
import jwt from "./passport/jwt.js";

export default (app) => {
  app.use(passport.initialize());

  jwt(passport);

  return passport;
};
