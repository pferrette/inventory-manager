const repo = require("../repositories/termRepository");

async function getTerms() {
  return await repo.getTerms();
}

module.exports = {
  getTerms,
};
