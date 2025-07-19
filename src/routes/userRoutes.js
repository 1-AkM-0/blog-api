const { Router } = require("express");
const userRouter = Router();
const UserController = require("../controllers/userController");
const createUserValidator = require("../validators/validateUser");
const { verifyJwt } = require("../middlewares/verifyJWT");
const isAuthorized = require("../middlewares/isAuthorized");

userRouter.get("/", verifyJwt, isAuthorized.isAdmin, UserController.getUsers);

userRouter.get(
  "/:userId",
  verifyJwt,
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
  verifyJwt,
  isAuthorized.isAdminOrUser,
  UserController.putUser
);

userRouter.delete(
  "/:userId",
  verifyJwt,
  isAuthorized.isAdminOrUser,
  UserController.deleteUser
);

module.exports = userRouter;
