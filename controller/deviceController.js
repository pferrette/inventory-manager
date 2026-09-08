const deviceService = require("../services/deviceService");

async function updateDevice(req, res) {
  const device = await deviceService.updateDevice(req.body);
  res.json(device);
}

module.exports = {
  updateDevice,
};
