const { body, validationResult } = require("express-validator");
const UserService = require("../services/userQueries");

const validateUser = [
  body("firstName")
    .isEmpty()
    .withMessage("Must have a First name")
    .trim()
    .isAlpha()
    .withMessage("First name must only contain letters")
    .isLength({ min: 1, max: 10 })
    .withMessage("First name must between 1 and 10 characters"),
  body("lastName")
    .isEmpty()
    .withMessage("Must have a Last name")
    .trim()
    .isAlpha()
    .withMessage("Last name must only contain letters")
    .isLength({ min: 1, max: 10 })
    .withMessage("Last name must between 1 and 10 characters"),
  body("username")
    .isEmpty("Must have a username")
    .trim()
    .escape()
    .custom(async (value) => {
      const user = await UserService.findUserByUsername(value);
      if (user) {
        throw new Error("Username already in use");
      }
    }),

  body("email")
    .isEmpty()
    .withMessage("Must have a email")
    .trim()
    .isEmail()
    .withMessage("Email should be valid")
    .normalizeEmail()
    .custom(async (value) => {
      const user = await UserService.findUserByEmail(value);
      if (user) {
        throw new Error("Email already in use");
      }
    }),

  body("password").trim().isLength({ min: 8 }),
  body("passwordConfirmation").custom((value) => {
    return req.body.password === value;
  }),
  body("role")
    .trim()
    .custom((value) => {
      if (value !== "ADMIN" && value !== "BASIC") {
        return false;
      }
    }),
];
