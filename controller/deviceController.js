const deviceService = require("../services/deviceService");
const deviceRepository = require("../repositories/deviceRepository");

async function updateDevice(req, res) {
  console.log(req.body);
  const device = await deviceService.updateDeviceUser(req.body);
  res.json(device);
}

async function getDeviceById(req, res) {
  const id = parseInt(req.params.id, 10);
  const returnedDevice = await deviceService.getDeviceById(id);
  return res.json({ device: returnedDevice });
}

async function getDeviceByUserId(req, res) {
  const userId = parseInt(req.params.id, 10);
  const result = await deviceRepository.getByUserId(userId);
  res.json({ device: result });
}

module.exports = {
  updateDevice,
  getDeviceById,
  getDeviceByUserId,
};
