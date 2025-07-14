const { Router } = require("express");
const commentRouter = Router();

commentRouter.get("/posts");
commentRouter.get("/posts/:id");
commentRouter.get("posts/:id/comments");
commentRouter.post("posts/:id/comments");

module.exports = commentRouter;
