const deviceRepo = require("../repositories/deviceRepository");
const termRepo = require("../repositories/termRepository");
const lastChangeRepo = require("../repositories/lastChangeRepository");

async function updateDeviceUser(deviceData) {
  const device = await deviceRepo.changeUser(deviceData);

  const change_date = new Date();
  await lastChangeRepo.createLastChange({
    device_id: device.id,
    from_user_id: deviceData.from_user_id,
    to_user_id: deviceData.to_user_id,
    reason: deviceData.reason,
    change_date: change_date,
  });

  await termRepo.updateDeviceTerm({
    to_user_id: deviceData.to_user_id,
    device_id: device.id,
  });

  return device;
}

module.exports = {
  updateDevice,
};
