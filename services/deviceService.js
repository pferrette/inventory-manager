const deviceRepo = require("../repositories/deviceRepository");
const termRepo = require("../repositories/termRepository");
const lastChangeRepo = require("../repositories/lastChangeRepository");

async function updateDeviceUser(deviceData) {
  const userId = deviceData.to_user_id;
  const device = await deviceRepo.changeUser(deviceData);

  // const change_date = new Date();
  await lastChangeRepo.createLastChange({
    device_id: device.id,
    from_user_id: deviceData.from_user,
    to_user_id: userId,
    reason: deviceData.reason,
    change_date: new Date(),
  });

  const existingTerm = await termRepo.getTermsByUserId(userId);
  console.log(existingTerm);
  if (existingTerm === undefined) {
    await termRepo.createTerm(userId);
  }

  await termRepo.updateDeviceTerm({
    to_user_id: userId,
    device_id: device.id,
  });

  return device;
}

async function getDeviceById(id) {
  const res = await deviceRepo.getById(id);
  return res;
}

module.exports = {
  updateDeviceUser,
  getDeviceById,
};
