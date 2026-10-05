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

module.exports = {
  updateMobile,
  getAllMobiles,
};
