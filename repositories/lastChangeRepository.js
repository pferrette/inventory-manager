const { pool } = require("../database");

async function createLastChange(data) {
  const { device_id, from_user_id, to_user_id, change_date, reason } = data;
  try {
    await pool.query(
      `INSERT INTO last_changes (device_id, from_user_id, to_user_id, changed_date,reason) 
      VALUES ($1, $2, $3, $4, $5)`,
      [device_id, from_user_id, to_user_id, change_date, reason],
    );
  } catch (error) {
    console.error("Error creating last change:", error);
    throw error;
  }
}

module.exports = {
  createLastChange,
};
