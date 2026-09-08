const userRepo = require("../repositories/userRepository");
const termRepo = require("../repositories/termRepository");

async function createUser(userData) {
  const user = await userRepo.createUser(userData);

  await termRepo.createTerm({
    user_id: user.id,
  });

  return user;
}

module.exports = {
  createUser,
};
