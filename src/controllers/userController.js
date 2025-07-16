const UserServices = require("../services/userQueries");

class UserController {
  static postUser = async (req, res) => {
    const { name, username, email, password } = req.body;
    
    await UserServices.createUser((name, username, email, password, role));
    res.json({ message: "user created" });
  };

  static getUsers = async (req, res) => {
    const users = await UserServices.getAllUsers();
    res.json(users);
  };

  static getUser = async (req, res) => {
    const { id } = req.body;
    const user = await UserServices.getUser(id);
    res.json(user);
  };

  static putUser = async (req, res) => {
    const { userId } = parseInt(req.params);
    const { username, password } = req.body;
    await UserServices.updateUser(id, username, password);
    res.json({ message: "user updated" });
  };

  static deleteUser = async (req, res) => {
    const { userId } = parseInt(req.params);

    await UserServices.deleteUser(userId);
    res.json({ message: "user deleted" });
  };
}

module.exports = UserController;
