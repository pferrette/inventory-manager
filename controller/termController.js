const service = require("../services/termService");

async function getTerms(req, res) {
  const term = await service.getTerms();
  res.status(200).json(term);
}

module.exports = {
  getTerms,
};
