const deviceService = require("../services/deviceService");
const deviceRepository = require("../repositories/deviceRepository");

async function updateDevice(req, res) {
  const device = await deviceService.updateDeviceUser(req.body);
  res.json(device);
}

async function getDeviceById(req, res) {
  console.log("acionou o controller");
  const id = parseInt(req.params.id, 10);
  console.log(id);
  const device = await deviceRepository.getById(id);
  res.json(device);
}

module.exports = {
  updateDevice,
  getDeviceById,
};
