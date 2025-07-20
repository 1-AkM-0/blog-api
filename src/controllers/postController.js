const postQueries = require("../services/postQueries");

class PostController {
  static getPosts = async (req, res) => {
    try {
      const posts = await postQueries.getAll();
      res.json({ posts });
    } catch (error) {
      res.status(500).json({ message: "Database error" });
    }
  };
  static getPost = async (req, res) => {
    let { postId } = req.params;
    postId = parseInt(postId);
    try {
      const post = await postQueries.getUnique(postId);
      res.json({ post });
    } catch (error) {
      res.status(500).json({ message: "Database error" });
    }
  };
  static postPosts = async (req, res) => {
    const { title, body } = req.body;
    const { user } = req;
    await postQueries.createPost(user.id, title, body);
    res.json({ message: "Post created" });
  };

  static deletePost = async (req, res) => {
    let { postId } = req.params;
    postId = parseInt(postId);
    try {
      await postQueries.deletePost(postId);
      res.status(204).json({ message: "Post deleted" });
    } catch (error) {
      res.status(500).json({ message: "Database error" });
    }
  };

  static putPost = async (req, res) => {
    let { postId } = req.params;
    postId = parseInt(postId);
    const { title, body } = req.body;
    try {
      await postQueries.updatePost(postId, title, body);
      res.status(204).json({ message: "Post updated" });
    } catch (error) {
      res.status(500).json({ message: "Database error" });
    }
  };
}

module.exports = PostController;
