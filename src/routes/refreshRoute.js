const { Router } = require("express");
const refreshRouter = Router();
const refreshController = require("../controllers/refreshController");
const { verifyJwt } = require("../middlewares/verifyJWT");
const { validateToken, checkRules } = require("../validators/validateToken");

refreshRouter.post(
  "/",
  verifyJwt,
  validateToken,
  checkRules,
  refreshController.refresh
);

module.exports = refreshRouter;
