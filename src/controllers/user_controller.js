const userService = require('../services/user_service');

class UserController {

  async getUsers(req, res) {
    const users = await userService.getAllUsers();
    res.json(users);
  }

  async getUser(req, res) {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  }

  async createUser(req, res) {
    try {
      res.status(201).json(await userService.createUser(req.body));
    } catch (error) {
      res.status(400).json({ message10: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    const deletedUser = await userService.deleteUser(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  }
}

module.exports = new UserController();
