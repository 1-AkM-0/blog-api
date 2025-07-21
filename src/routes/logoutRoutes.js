const { Router } = require("express");
const logoutController = require("../controllers/logoutController");
const { verifyJwt } = require("../middlewares/verifyJWT");
const { authoLogout } = require("../middlewares/isAuthorized");
const { validateToken, checkRules } = require("../validators/validateToken");
const logoutRouter = Router();

logoutRouter.delete(
  "/",
  verifyJwt,
  validateToken,
  checkRules,
  authoLogout,
  logoutController.logout
);

module.exports = logoutRouter;
