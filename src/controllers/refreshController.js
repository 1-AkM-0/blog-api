const jwt = require("jsonwebtoken");
require("dotenv").config();
const TokenServices = require("../services/tokenQueries");
const genJwtTokens = require("../utils/genJwtTokens");

const refresh = async (req, res) => {
  const { token: refreshToken } = req.body;

  jwt.verify(refreshToken, process.env.JWT_REFRESH, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Error on verification" });
    }
    const acessToken = genJwtTokens.generateAcessToken(user);
    res.send({
      acessToken,
    });
  });
};
module.exports = { refresh };
