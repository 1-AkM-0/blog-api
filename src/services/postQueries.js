const prisma = require("../db/prisma");

const getPosts = async () => {
  await prisma.user.create({
    data: {
      name: "Pedro Yan",
      username: "AkM",
    },
  });
};

module.exports = {};
