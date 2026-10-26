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

async function getChanges() {
  try {
    const result = await pool.query(
      `SELECT
            lc.id,
            lc.device_id,
            d.service_tag,
            d.asset_tag,

            fu.id AS from_user_id,
            fu.name AS from_user_name,

            tu.id AS to_user_id,
            tu.name AS to_user_name,
          tu.center_cost AS cc,

            lc.reason,
            lc.changed_date
        FROM last_changes lc
        LEFT JOIN users fu
            ON lc.from_user_id = fu.id
        LEFT JOIN users tu
            ON lc.to_user_id = tu.id
        LEFT JOIN devices d
            ON lc.device_id = d.id;`,
    );
    return result.rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createLastChange,
  getChanges,
};
