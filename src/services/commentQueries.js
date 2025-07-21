const prisma = require("../db/prisma");

class CommentServices {
  static createComment = async (authorId, body, postId) => {
    await prisma.comment.create({
      data: {
        authorId,
        body,
        postId,
      },
    });
  };
  static updateComment = async (postId, body, commentId) => {
    await prisma.comment.update({
      data: { body },
      where: { postId: postId, id: commentId },
    });
  };
  static deleteComment = async (postId, commentId) => {
    await prisma.comment.delete({
      where: {
        postId,
        commentId,
      },
    });
  };
  static getCommentById = async (commentId) => {
    const comment = await prisma.comment.findFirst({
      where: { id: commentId },
    });
    return comment;
  };
}

module.exports = CommentServices;
