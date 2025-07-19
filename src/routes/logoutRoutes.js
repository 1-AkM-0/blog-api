const { Router } = require("express");
const logoutController = require("../controllers/logoutController");
const { verify } = require("../middlewares/verifyJWT");
const isAuth = require("../middlewares/isAuthorized");
const logoutRouter = Router();

logoutRouter.delete("/", verify, logoutController.logout);

module.exports = logoutRouter;
