import passportJwt from "passport-jwt";
// import db from '../../model';

const configJwtStrategy = {
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "secret",
  passReqToCallback: true,
};

export default (passport) => {
  passport.use(
    new passportJwt.Strategy(configJwtStrategy, async (req, payload, done) => {
      try {
        const final = payload.user;
        req.user = payload.user;

        return done(null, final);
      } catch (error) {
        captureException(error);
        return done(null, false, { message: "El token no es valido" });
      }
    })
  );
};
