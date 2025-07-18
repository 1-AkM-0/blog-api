const { Router } = require("express");
const refreshRouter = Router();
const refreshController = require("../controllers/userController");

refreshRouter.post("/");

module.exports = refreshRouter;
