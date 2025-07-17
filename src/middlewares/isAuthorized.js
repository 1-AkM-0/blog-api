class isAuthor {
  static isAdmin = (req, res, next) => {
    if (req.user.role !== "ADMIN") {
      res.status(403).json({ message: "You dont have permission to this" });
    }
    next();
  };

  static isAdminOrUser = (req, res, next) => {
    if (req.user.role === "ADMIN" || req.user.id === req.params.userId) {
      next();
    }
    res.status(403).json({ message: "You dont have permission to this" });
  };
}
module.exports = isAuthor;
