const { Router } = require("express");
const logoutController = require("../controllers/logoutController");
const { verifyJwt } = require("../middlewares/verifyJWT");
const isAuth = require("../middlewares/isAuthorized");
const { validateToken, checkRules } = require("../validators/validateToken");
const logoutRouter = Router();

logoutRouter.delete(
  "/",
  verifyJwt,
  validateToken,
  checkRules,
  isAuth.isOwnerOrAdmin,
  logoutController.logout
);

module.exports = logoutRouter;
