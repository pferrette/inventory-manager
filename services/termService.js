const repo = require("../repositories/termRepository");

async function getTerms() {
  return await repo.getTerms();
}

async function getTermsByUserId(id) {
  return await repo.getTermsByUserId(id);
}

module.exports = {
  getTerms,
  getTermsByUserId,
};
