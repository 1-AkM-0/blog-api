const UserServices = require("../services/userQueries");
const bcrypt = require("bcryptjs");

class UserController {
  static postUser = async (req, res) => {
    let { firstName, lastName, username, email, password } = req.body;
    const role = req.body.role || "BASIC";
    password = await bcrypt.hash(password, 10);
    console.log(firstName, lastName, username, email, password, role);
    await UserServices.createUser(
      firstName,
      lastName,
      username,
      email,
      password,
      role
    );

    res.json({ message: "user created" });
  };

  static getUsers = async (req, res) => {
    const users = await UserServices.getAllUsers();
    res.json(users);
  };

  static getUser = async (req, res) => {
    let { userId } = req.params;
    userId = parseInt(userId);
    const user = await UserServices.getUser(userId);
    res.json(user);
  };

  static putUser = async (req, res) => {
    let { userId } = req.params;
    userId = parseInt(userId);

    let { username, password } = req.body;
    password = await bcrypt.hash(password, 10);
    await UserServices.updateUser(userId, username, password);
    res.json({ message: "user updated" });
  };

  static deleteUser = async (req, res) => {
    let { userId } = req.params;
    userId = parseInt(userId);

    await UserServices.deleteUser(userId);
    res.json({ message: "user deleted" });
  };
}

module.exports = UserController;
