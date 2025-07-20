const TokenServices = require("../services/tokenQueries");

class isAuth {
  static isAdmin = (req, res, next) => {
    if (req.user.role !== "ADMIN") {
      return res
        .status(403)
        .json({ message: "You dont have permission to this" });
    }
    next();
  };

  static isAdminOrUser = (req, res, next) => {
    if (req.user.role === "ADMIN" || req.user.id === req.params.userId) {
      return next();
    }
    return res
      .status(403)
      .json({ message: "You dont have permission to this" });
  };

  static isOwnerOrAdmin = async (req, res, next) => {
    const { user } = req;
    const { token: refreshToken } = req.body;
    const tokenDb = await TokenServices.getToken(refreshToken);

    if (tokenDb.userId !== user.id || user.role !== "ADMIN") {
      return res.status(403).json({ message: "Ids dont match" });
    }
    next();
  };
}
module.exports = isAuth;
