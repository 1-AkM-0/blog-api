const prisma = require("../db/prisma");

class PostServices {
  static getAll = async () => {
    const posts = await prisma.post.findMany({ include: { comments: true } });
    return posts;
  };
  static getPostById = async (postId) => {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: { comments: { where: { postId: postId } } },
    });
    return post;
  };
  static createPost = async (authorId, title, body) => {
    await prisma.post.create({
      data: {
        authorId,
        title,
        body,
      },
    });
  };
  static deletePost = async (postId) => {
    await prisma.post.delete({
      where: {
        id: postId,
      },
    });
  };
  static updatePost = async (postId, title, body) => {
    await prisma.post.update({
      where: { postId },
      data: {
        title,
        body,
      },
    });
  };
}

module.exports = PostServices;
