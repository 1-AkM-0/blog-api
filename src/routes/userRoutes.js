const { Router } = require("express");
const userRouter = Router();
const UserController = require("../controllers/userController");

userRouter.get("/", UserController.getUsers);
userRouter.get("/:userId", UserController.getUser);
userRouter.post("/", UserController.postUser);
userRouter.put("/:userId", UserController.putUser);
// userRouter.delete("/:userId");

module.exports = userRouter;
