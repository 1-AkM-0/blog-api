const { Router } = require("express");
const postRouter = Router();
const PostController = require("../controllers/postController");
const CommentController = require("../controllers/commentController");
const { verifyJwt } = require("../middlewares/verifyJWT");
const { isAdmin, authoComment } = require("../middlewares/isAuthorized");
const {
  validatePost,
  checkRules,
} = require("../validators/validateCreatePost");
const { validateUpdatePost } = require("../validators/validateUpdatePost");

postRouter.get("/", verifyJwt, PostController.getPosts);
postRouter.get("/:postId", verifyJwt, PostController.getPost);
postRouter.post(
  "/",
  verifyJwt,
  isAdmin,
  validatePost,
  checkRules,
  PostController.postPosts
);
postRouter.delete("/:postId", verifyJwt, isAdmin, PostController.deletePost);
postRouter.patch(
  "/:postId",
  verifyJwt,
  isAdmin,
  validateUpdatePost,
  checkRules,
  PostController.putPost
);

postRouter.post(
  "/:postId/comments",
  verifyJwt,
  authoComment,
  CommentController.postComment
);
postRouter.patch(
  "/:postId/comments/:commentId",
  verifyJwt,
  authoComment,
  CommentController.patchComment
);
postRouter.delete(
  "/:postId/comments/:commentId",
  verifyJwt,
  authoComment,
  CommentController.deleteComment
);

module.exports = postRouter;
