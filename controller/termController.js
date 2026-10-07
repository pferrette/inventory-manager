const service = require("../services/termService");

async function getTerms(req, res) {
  const term = await service.getTerms();
  res.status(200).json(term);
}

async function getTermsByUserId(req, res) {
  const userId = parseInt(req.params.id, 10);
  const term = await service.getTermsByUserId(userId);
  res.json({ terms: term });
}

module.exports = {
  getTerms,
  getTermsByUserId,
};
