const { pool } = require("../database");

async function createTerm(data) {
  const user_id = data.user_id;
  await pool.query(
    `INSERT INTO term_status (user_id,is_signed)
      VALUES 
      ($1,false)`,
    [user_id],
  );
}

async function updateDeviceTerm(data) {
  const { to_user_id } = data;
  await pool.query(
    `UPDATE term_status SET is_signed = false WHERE user_id = $1`,
    [to_user_id],
  );
}

module.exports = {
  createTerm,
  updateDeviceTerm,
};
