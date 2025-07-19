const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const bcrypt = require("bcryptjs");
const UserService = require("../services/userQueries");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await UserService.findUserByUsername(username);
      console.log(user);

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      const match = bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

// passport.use(new JwtStrategy());

module.exports = passport;
