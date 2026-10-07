const path = require("path");
const userService = require("../services/userService");

async function createUser(req, res) {
  const user = await userService.createUser(req.body);

  res.status(201).json(user);
}

async function getUserById(req, res) {
  const id = parseInt(req.params.id, 10);
  const users = await userService.getUserById(id);
  return res.json({ user: users });
}

module.exports = {
  createUser,
  getUserById,
};
