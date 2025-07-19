const TokenServices = require("../services/tokenQueries");

const logout = async (req, res) => {
  const { token: refreshToken } = req.body;
  const tokenDb = await TokenServices.getToken(refreshToken);
  if (!tokenDb) {
    res.status(403).json({ message: "Token not found" });
  }
  const { user } = req;
  if (tokenDb.userId !== user.id) {
    res.status(403).json({ message: "Ids dont match" });
  }
  await TokenServices.delete(user.id, refreshToken);
  res.status(204).json({ message: "Logout sucessfull" });
};

module.exports = { logout };
