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

module.exports = {
  createTerm,
};
