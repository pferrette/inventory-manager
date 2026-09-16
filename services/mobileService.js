const mobileRepo = require("../repositories/mobileRepository");
const termRepo = require("../repositories/termRepository");
// const configInfoRepo = require("../repositories/configurationInfosRepository");
const lineRepo = require("../repositories/lineRepository");

async function assignMobileToUser(mobileData) {
  await mobileRepo.changeUser(mobileData);

  //set term as false
  await termRepo.updateMobileTerm({
    user_id: mobileData.user_id,
    mobile_id: mobileData.id,
  });
}

module.exports = {
  assignMobileToUser,
};
