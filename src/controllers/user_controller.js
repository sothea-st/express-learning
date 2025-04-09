const userService = require('../services/user_service');

exports.getUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

exports.getUser = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// exports.createUser = async (req, res) => {
//   const newUser = await userService.createUser(req.body);
//   res.status(201).json(newUser);
// };

exports.createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser); // Send successful response with the new user data
  } catch (error) {
    // Catch errors and send a response without crashing the server
    console.error(error);  // Log the error for debugging purposes
    res.status(400).json({ message: error.message }); // Send the error message to the client
  }
};



exports.updateUser = async (req, res) => {
  const updatedUser = await userService.updateUser(req.params.id, req.body);
  if (!updatedUser) return res.status(404).json({ message: 'User not found' });
  res.json(updatedUser);
};

exports.deleteUser = async (req, res) => {
  const deletedUser = await userService.deleteUser(req.params.id);
  if (!deletedUser) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted' });
};
