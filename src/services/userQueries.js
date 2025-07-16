const prisma = require("../db/prisma");

class UserService {
  static createUser = async (
    firstName,
    lastName,
    username,
    email,
    password,
    role
  ) => {
    await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        role: role,
      },
    });
  };

  static getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
  };

  static getUser = async (id) => {
    const user = await prisma.user.findFirst({
      where: { id: id },
    });
    return user;
  };

  static updateUser = async (id, username, password) => {
    await prisma.user.update({
      where: { id: id },
      data: {
        username: username,
        password: password,
      },
    });
  };

  static deleteUser = async (id) => {
    await prisma.user.delete({
      where: { id: id },
    });
  };
  static findUserByEmail = async (email) => {
    const user = await prisma.user.findFirst({
      where: { email: email },
    });
    return user;
  };
  static findUserByUsername = async (username) => {
    const user = await prisma.user.findFirst({
      where: { username: username },
    });
    return user;
  };
}

module.exports = UserService;
