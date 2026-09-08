const deviceRepo = require("../repositories/deviceRepository");
const termRepo = require("../repositories/termRepository");
const lastChangeRepo = require("../repositories/lastChangeRepository");

async function updateDevice(deviceData) {
  const device = await deviceRepo.updateDevice(deviceData);

  await lastChangeRepo.createLastChange({
    device_id: device.id,
    from_user_id: deviceData.from_user_id,
    to_user_id: deviceData.to_user_id,
    change_date: new Date(),
  });

  await termRepo.updateDeviceTerm({
    to_user_id: deviceData.to_user_id,
  });

  return device;
}

module.exports = {
  updateDevice,
};
