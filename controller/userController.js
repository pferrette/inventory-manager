const userService = require("../services/userService");

async function createUser(req, res) {
  const user = await userService.createUser(req.body);

  res.status(201).json(user);
}

module.exports = {
  createUser,
};
