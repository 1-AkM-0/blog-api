const TokenServices = require("../services/tokenQueries");
const genJwtTokens = require("../utils/genJwtTokens");

const authenticate = async (req, res) => {
  const { user } = req;
  // console.log(user);
  const acessToken = genJwtTokens.generateAcessToken(user);
  const refreshToken = genJwtTokens.generateRefreshToken(user);
  await TokenServices.insertToken(user.id, refreshToken);
  res.json({
    username: user.username,
    role: user.role,
    acessToken,
    refreshToken,
  });
};

module.exports = { authenticate };
