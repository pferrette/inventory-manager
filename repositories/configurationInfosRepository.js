const { pool } = require("../database.js");

async function createInfo(data) {
  const { user_id, mobile_id } = data;
  try {
    await pool.query(
      `INSERT INTO config_infos (user_id, mobile_id)
            VALUES ($1,$2)`,
      [user_id, mobile_id],
    );
  } catch (error) {}
}

module.exports = {
  createInfo,
};
