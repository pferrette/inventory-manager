const lastChangeRepo = require("../repositories/lastChangeRepository");

async function getChanges(req, res) {
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  console.log(currentMonth);

  const lastChange = await lastChangeRepo.getMonthsChanges(currentMonth);
  res.status(200).json({ last: lastChange });
}

module.exports = {
  getChanges,
};
