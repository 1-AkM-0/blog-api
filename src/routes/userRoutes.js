const { Router } = require("express");
const userRouter = Router();
const UserController = require("../controllers/userController");
const createValidator = require("../validators/validateUser");

userRouter.get("/", UserController.getUsers);
userRouter.get("/:userId", UserController.getUser);
userRouter.post(
  "/",
  createValidator.validateUser,
  createValidator.checkRules,
  UserController.postUser
);
userRouter.put("/:userId", UserController.putUser);
userRouter.delete("/:userId", UserController.deleteUser);

module.exports = userRouter;
