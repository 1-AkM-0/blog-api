const { body, validationResult } = require("express-validator");
const TokenServices = require("../services/tokenQueries");

const validateToken = [
  body("token")
    .notEmpty()
    .withMessage("Server must recieve a token")
    .custom(async (refreshToken) => {
      const tokenDb = await TokenServices.getToken(refreshToken);
      if (!tokenDb) {
        throw new Error("Token not found");
      }
      return true;
    }),
];

const checkRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateToken, checkRules };
