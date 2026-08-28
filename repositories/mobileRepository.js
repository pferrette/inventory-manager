const { pool } = require("../database.js");

const getMobiles = async (req, res) => {
  try {
    const results = await pool.query(`select * from mobiles`);
    res.status(200).json({ mobiles: results.rows });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getMobiles,
};
