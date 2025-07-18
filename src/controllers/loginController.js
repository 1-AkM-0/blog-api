const { generateAcessToken } = require("../utils/genAcessToken");

const authenticate = (req, res) => {
  const { user } = req;
  const acessToken = generateAcessToken(user);
  res.json({
    username: user.username,
    role: user.role,
    acessToken,
  });
};

module.exports = { authenticate };
