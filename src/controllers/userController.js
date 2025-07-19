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
    console.log(req.body.token);
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
    const { username, password } = req.body;
    await UserServices.updateUser(id, username, password);
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
