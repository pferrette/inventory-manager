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
  const { to_user_id, device_id } = data;
  await pool.query(
    `UPDATE term_status SET is_signed = false, device_id = $2 WHERE user_id = $1`,
    [to_user_id, device_id],
  );
}

async function updateMobileTerm(data) {
  const { user_id, mobile_id } = data;
  await pool.query(
    `UPDATE term_status SET is_signed = false, mobile_id = $2 WHERE user_id = $1`,
    [user_id, mobile_id],
  );
}

async function getTerms() {
  const result = await pool.query(`
     SELECT
      t.id,
      u.name,
      t.user_id,
      t.is_signed,
      t.data_term_status,
      t.signed_date
    FROM term_status AS t
    INNER JOIN users AS u
      ON t.user_id = u.id;
    ;`);
  return result.rows;
}

module.exports = {
  createTerm,
  updateDeviceTerm,
  updateMobileTerm,
  getTerms,
};
