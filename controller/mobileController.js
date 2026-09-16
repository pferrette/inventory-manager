const mobileService = require("../services/mobileService");

async function updateMobile(req, res) {
  console.log(req.body);
  const mobile = await mobileService.assignMobileToUser(req.body);
  res.json(mobile);
}

module.exports = {
  updateMobile,
};
