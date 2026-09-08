const deviceService = require("../services/deviceService");

async function createDevice(req, res) {
  const device = await deviceService.createDevice(req.body);
  res.status(201).json(device);
}
