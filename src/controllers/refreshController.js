const jwt = require("jsonwebtoken");
require("dotenv").config();
const TokenServices = require("../services/tokenQueries");
const genJwtTokens = require("../utils/genJwtTokens");

const refresh = async (req, res) => {
  const { token: refreshToken } = req.body;

  if (!refreshToken) {
    res.status(401).json({ message: "No token sent" });
  }

  const tokenDb = await TokenServices.getToken(refreshToken);
  if (!tokenDb) {
    res.status(403).json({ message: "Token sent is not in DB" });
  }
  const { user } = req;
  if (tokenDb.userId !== user.id) {
    res.status(403).json({ message: "Ids dont match" });
  }

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
