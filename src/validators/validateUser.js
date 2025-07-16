const { body, validationResult, check } = require("express-validator");
const UserService = require("../services/userQueries");

const validateUser = [
  body("firstName")
    .notEmpty()
    .withMessage("Must have a First name")
    .trim()
    .isAlpha()
    .withMessage("First name must only contain letters")
    .isLength({ min: 1, max: 10 })
    .withMessage("First name must between 1 and 10 characters"),
  body("lastName")
    .notEmpty()
    .withMessage("Must have a Last name")
    .trim()
    .isAlpha()
    .withMessage("Last name must only contain letters")
    .isLength({ min: 1, max: 10 })
    .withMessage("Last name must between 1 and 10 characters"),
  body("username")
    .notEmpty()
    .withMessage("Must have a username")
    .trim()
    .escape()
    .custom(async (value) => {
      const user = await UserService.findUserByUsername(value);
      if (user) {
        throw new Error("Username already in use");
      }
    }),

  body("email")
    .notEmpty()
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
    })
    .escape(),

  body("password").trim().isLength({ min: 8 }).escape(),

  body("passwordConfirmation").custom(
    (value, { req }) => value === req.body.password
  ),
  body("role").trim().isIn(["ADMIN", "BASIC", ""]),
];

const checkRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateUser, checkRules };
