const UserServices = require("../services/userQueries");

class UserController {
  static postUser = async (req, res) => {
    await UserServices.createUser();
    res.json({ message: "deu bom" });
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
    const { id, username, password } = req.body;
    await UserServices.updateUser(id, username, password);
    res.json({ message: "usuário atualizado" });
  };
}

module.exports = UserController;
