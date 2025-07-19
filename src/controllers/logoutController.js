const TokenServices = require("../services/tokenQueries");

const logout = async (req, res) => {
  const { user } = req;
  const { token: refreshToken } = req.body;
  try {
    await TokenServices.delete(user.id, refreshToken);
  } catch (error) {
    res.status(500).json({ message: "Database error" });
  }
  res.status(204).json({ message: "Logout sucessfull" });
};

module.exports = { logout };
