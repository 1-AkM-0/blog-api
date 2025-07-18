const jwt = require("jsonwebtoken");
require("dotenv").config();
const generateAcessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET
  );
};

module.exports = { generateAcessToken };
