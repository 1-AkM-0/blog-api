const { Router } = require("express");
const loginRouter = Router();
const loginController = require("../controllers/loginController");
const passport = require("../config/passport");

loginRouter.post(
  "/",
  passport.authenticate("local", { session: false }),
  loginController.authenticate
);

module.exports = loginRouter;
