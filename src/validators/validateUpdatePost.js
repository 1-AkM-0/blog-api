const { body, validationResult } = require("express-validator");
const PostServices = require("../services/postQueries");

const validateUpdatePost = [
  body("title").optional().notEmpty().isString().escape(),
  body("body").optional().notEmpty().isString().escape(),
  body("isPublished").optional().escape(),
];

const checkRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validatePost: validateUpdatePost, checkRules };
