const { body, validationResult } = require("express-validator");
const PostServices = require("../services/postQueries");

const validatePost = [
  body("title").notEmpty().isString().escape(),
  body("body").notEmpty().isString().escape(),
];

const checkRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validatePost, checkRules };
