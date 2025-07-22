const CommentServices = require("../services/commentQueries");
const PostServices = require("../services/postQueries");
const TokenServices = require("../services/tokenQueries");

class isAuth {
  static isAdmin = (req, res, next) => {
    if (req.user.role !== "ADMIN") {
      return res
        .status(403)
        .json({ message: "You dont have permission to do this" });
    }
    next();
  };

  static isAdminOrUser = (req, res, next) => {
    if (req.user.role === "ADMIN" || req.user.id === req.params.userId) {
      return next();
    }
    return res
      .status(403)
      .json({ message: "You dont have permission to do this" });
  };

  static authoLogout = async (req, res, next) => {
    const { user } = req;
    const { token: refreshToken } = req.body;
    const tokenDb = await TokenServices.getToken(refreshToken);

    if (tokenDb.userId === user.id || user.role === "ADMIN") {
      return next();
    }
    return res
      .status(403)
      .json({ message: "You dont have permission to do this" });
  };

  static authoComment = async (req, res, next) => {
    const { user } = req;
    let commentId = req.params.commentId;
    commentId = parseInt(commentId);
    const comment = await CommentServices.getCommentById(commentId);
    if (!comment) {
      return res.status(403).json({ message: "Resourse dont found" });
    }
    if (comment.authorId === user.id || user.role === "ADMIN") {
      return next();
    }
    return res
      .status(403)
      .json({ message: "You dont have permission to do this" });
  };
}
module.exports = isAuth;
