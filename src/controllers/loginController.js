const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticate = (req, res) => {
  const { user } = req;
  const acessToken = jwt.sign(
    {
      id: user.id,
      isAdmin: user.role,
    },
    process.env.JWT_SECRET
  );
  res.json({
    username: user.username,
    role: user.role,
    acessToken,
  });
};

module.exports = { authenticate };
