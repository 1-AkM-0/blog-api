const express = require("express");
const commentRoutes = require("./routes/commentRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", postRoutes);
app.use("/admin", commentRoutes);

const startServer = (port = process.env.PORT || 3000) => {
  app.listen(port, () => {
    console.log(`App running on ${port} port`);
  });
};

module.exports = startServer;
