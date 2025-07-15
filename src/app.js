const express = require("express");

// const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

const startServer = (port = process.env.PORT || 3000) => {
  app.listen(port, () => {
    console.log(`App running on ${port} port`);
  });
};

module.exports = startServer;
