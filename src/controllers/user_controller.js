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


exports.createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser); // Send successful response with the new user data
  } catch (error) {
    // Check if the error is a Mongoose validation error
    if (error.name === 'ValidationError') {
      // Extract the first validation error message
      const firstError = Object.values(error.errors)[0].message;
      return res.status(400).json({ message: firstError });  // Send the custom error message
    }

    // Handle other types of errors
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};



exports.updateUser = async (req, res) => {
  try {
    res.json( await userService.updateUser(req.params.id, req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteUser = async (req, res) => {
  const deletedUser = await userService.deleteUser(req.params.id);
  if (!deletedUser) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted' });
};
