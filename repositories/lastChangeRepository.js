const { pool } = require("../database");

async function createLastChange(data) {
  const { device_id, from_user_id, to_user_id, change_date } = data;
  try {
    await pool.query(
      `INSERT INTO last_change (device_id, from_user_id, to_user_id, change_date) 
      VALUES ($1, $2, $3, $4)`,
      [device_id, from_user_id, to_user_id, change_date],
    );
  } catch (error) {
    console.error("Error creating last change:", error);
    throw error;
  }
}

module.exports = {
  createLastChange,
};
