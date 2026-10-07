const lineService = require("../services/lineService.js");

async function getLineByUserId(req, res) {
  const userId = parseInt(req.params.id, 10);
  const result = await lineService.getLineByUserId(userId);
  res.json({ lines: result });
}

module.exports = {
  getLineByUserId,
};
