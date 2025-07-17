const { Router } = require("express");
const userRouter = Router();
const UserController = require("../controllers/userController");
const createValidator = require("../validators/validateUser");
const jwtVerify = require("../middlewares/verifyJWT");

userRouter.get("/", jwtVerify.verify, UserController.getUsers);
userRouter.get("/:userId", jwtVerify.verify, UserController.getUser);
userRouter.post(
  "/",
  createValidator.validateUser,
  createValidator.checkRules,
  UserController.postUser
);
userRouter.put("/:userId", jwtVerify.verify, UserController.putUser);
userRouter.delete("/:userId", jwtVerify.verify, UserController.deleteUser);

module.exports = userRouter;
