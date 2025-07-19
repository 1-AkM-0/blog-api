const { Router } = require("express");
const refreshRouter = Router();
const refreshController = require("../controllers/refreshController");
const { verifyJwt } = require("../middlewares/verifyJWT");

refreshRouter.post("/", verifyJwt, refreshController.refresh);

module.exports = refreshRouter;
