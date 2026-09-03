const { pool } = require("../database.js");

const getMobiles = async (req, res) => {
  try {
    const results = await pool.query(`select * from mobiles`);
    res.status(200).json({ mobiles: results.rows });
  } catch (error) {
    throw error;
  }
};

const getMobilesById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const results = await pool.query("SELECT * FROM mobiles WHERE id= $1;", [
      id,
    ]);
    res.status(200).json(results.rows);
  } catch (error) {
    throw error;
  }
};

const createMobile = async (req, res) => {
  const { imei, model } = req.body;
  try {
    const results = await pool.query(
      `INSERT INTO mobiles (imei, model)
   VALUES ($1, $2)`,
      [imei, model],
    );
    res.status(201).send(`Mobile Added`);
  } catch (error) {
    throw error;
  } finally {
    // await pool.end();
  }
};

const updateMobiles = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const { imei, model } = req.body;
  try {
    await pool.query("UPDATE mobiles SET imei = $1, model = $2 WHERE id = $3", [
      imei,
      model,
      id,
    ]);

    res.status(200).send(`Mobile modified with ID: ${id}`);
  } catch (error) {
    throw error;
  } finally {
    // await pool.end();
  }
};

const deleteMobiles = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    await pool.query("DELETE FROM mobiles WHERE id = $1", [id]);
  } catch (error) {
    throw error;
  } finally {
    // await pool.end();
  }
};

module.exports = {
  getMobiles,
  getMobilesById,
  createMobile,
  updateMobiles,
  deleteMobiles,
};
