const prisma = require("../db/prisma");
class TokenServices {
  static insertToken = async (id, refreshToken) => {
    await prisma.token.create({
      data: {
        token: refreshToken,
        userId: id,
      },
    });
  };

  static getToken = async (token) => {
    const tokenDb = await prisma.token.findFirst({
      where: {
        token: token,
      },
    });
    return tokenDb;
  };
  static delete = async (id, token) => {
    await prisma.token.delete({
      where: {
        userId: id,
        token,
      },
    });
  };
}

module.exports = TokenServices;
