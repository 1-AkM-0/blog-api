const jwt = require("jsonwebtoken");
require("dotenv").config();
class genJwtTokens {
  static generateAcessToken = (user) => {
    return jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );
  };

  static generateRefreshToken = (user) => {
    return jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_REFRESH
    );
  };
}

module.exports = genJwtTokens;
