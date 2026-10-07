const mobileService = require("../services/mobileService");

async function getAllMobiles(req, res) {
  const allMobiles = await mobileService.getAllMobiles();
  res.status(200).json(allMobiles);
}

async function updateMobile(req, res) {
  console.log(req.body);
  const mobile = await mobileService.assignMobileToUser(req.body);
  res.json(mobile);
}

async function getMobileByUserId(req, res) {
  const userId = parseInt(req.params.id, 10);
  const result = await mobileService.getByUserId(userId);
  res.json({ mobile: result });
}

module.exports = {
  updateMobile,
  getAllMobiles,
  getMobileByUserId,
};
