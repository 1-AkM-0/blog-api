const { Router } = require("express");
const userRouter = Router();
const UserController = require("../controllers/userController");
const createUserValidator = require("../validators/validateUser");
const jwtVerify = require("../middlewares/verifyJWT");
const isAuthorized = require("../middlewares/isAuthorized");

userRouter.get(
  "/",
  jwtVerify.verify,
  isAuthorized.isAdmin,
  UserController.getUsers
);

userRouter.get(
  "/:userId",
  jwtVerify.verify,
  isAuthorized.isAdmin,
  UserController.getUser
);

userRouter.post(
  "/",
  createUserValidator.validateUser,
  createUserValidator.checkRules,
  UserController.postUser
);

userRouter.put(
  "/:userId",
  jwtVerify.verify,
  isAuthorized.isAdminOrUser,
  UserController.putUser
);

userRouter.delete(
  "/:userId",
  jwtVerify.verify,
  isAuthorized.isAdminOrUser,
  UserController.deleteUser
);

module.exports = userRouter;
