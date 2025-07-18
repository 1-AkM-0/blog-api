const { Router } = require("express");
const refreshRouter = Router();
const refreshController = require("../controllers/refreshController");
const { verify } = require("../middlewares/verifyJWT");

refreshRouter.post("/", verify, refreshController.refresh);

module.exports = refreshRouter;
