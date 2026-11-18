const lineRepo = require("../repositories/lineRepository");

async function getLineByUserId(id) {
  return lineRepo.getLineByUserId(id);
}

module.exports = {
  getLineByUserId,
};
