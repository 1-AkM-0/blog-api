const { body, validationResult, check } = require("express-validator");

validateCreateComment = [
  body("body").notEmpty().withMessage("Comments must have some word").escape(),
];

const checkRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateCreateComment, checkRules };
