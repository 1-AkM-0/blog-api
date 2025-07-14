const { Router } = require("express");
const postRouter = Router();

postRouter.get("/");
postRouter.post("/");
postRouter.delete("/:id");
postRouter.put("/:id");

module.exports = postRouter;
