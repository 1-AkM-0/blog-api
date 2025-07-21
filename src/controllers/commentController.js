const CommentServices = require("../services/commentQueries");

class CommentController {
  static postComment = async (req, res) => {
    let { postId } = req.params;
    postId = parseInt(postId);
    const { body } = req.body;
    const { user } = req;
    const authorId = user.id;

    await CommentServices.createComment(authorId, body, postId);
    res.json({ message: "comment created" });
  };
  static patchComment = async (req, res) => {
    let { postId, commentId } = req.params;
    postId = parseInt(postId);
    commentId = parseInt(commentId);
    const { body } = req.body;

    await CommentServices.updateComment(postId, body, commentId);
    return res.json({ message: "comment updated" });
  };

  static deleteComment = async (req, res) => {
    let { postId, commentId } = req.params;
    postId, (commentId = parseInt(postId, commentId));

    await CommentServices.deleteComment(postId, commentId);
    res.status(204).json({ message: "comment deleted" });
  };
}

module.exports = CommentController;
