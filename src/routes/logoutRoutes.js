const { Router } = require("express");
const logoutController = require("../controllers/logoutController");
const { verifyJwt } = require("../middlewares/verifyJWT");
const isAuth = require("../middlewares/isAuthorized");
const logoutRouter = Router();

logoutRouter.delete("/", verifyJwt, logoutController.logout);

module.exports = logoutRouter;
