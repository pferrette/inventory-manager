const userRepo = require("../repositories/userRepository");
const termRepo = require("../repositories/termRepository");

async function createUser(userData) {
  const user = await userRepo.createUser(userData);

  await termRepo.createTerm({
    user_id: user.id,
  });

  return user;
}

async function getUserById(id) {
  return await userRepo.getUserById(id);
}

async function getByUsername(name) {
  console.log("service:" + name);
  return await userRepo.getByUsername(name);
}

module.exports = {
  createUser,
  getUserById,
  getByUsername,
};
