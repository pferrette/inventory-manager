const lastChangeRepo = require("../repositories/lastChangeRepository");

async function getChanges(req, res) {
  const lastChange = await lastChangeRepo.getChanges();
  res.status(200).json({ last: lastChange });
}

module.exports = {
  getChanges,
};
