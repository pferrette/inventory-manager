const { pool } = require("../database.js");

const getLines = async (req, res) => {
  try {
    const results = await pool.query(`SELECT * FROM lines`);
    res.status(200).json({ lines: results.rows });
  } catch (error) {
    throw error;
  }
};

const getLineById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  console.log(id);
  try {
    const results = await pool.query("SELECT * FROM lines WHERE id=$1", [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    throw error;
  } finally {
    //await pool.end();
  }
};

const createLine = async (req, res) => {
  const { number, type, is_using } = req.body;
  try {
    const results = await pool.query(
      `INSERT INTO lines (number, type, is_using)
   VALUES ($1, $2, $3)`,
      [number, type, is_using],
    );
    res.status(201).send(`Line Added`);
  } catch (error) {
    throw error;
  } finally {
    // await pool.end();
  }
};

const updateLines = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const { number, type, is_using } = req.body;
  try {
    await pool.query(
      "UPDATE lines SET number = $1, type = $2, is_using = $3 WHERE id = $4",
      [number, type, is_using, id],
    );

    res.status(200).send(`Line modified with ID: ${id}`);
  } catch (error) {
    throw error;
  } finally {
    // await pool.end();
  }
};

const deleteLine = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    console.log(id);
    await pool.query("DELETE FROM lines WHERE id = $1", [id]);
  } catch (error) {
    throw error;
  } finally {
    // await pool.end();
  }
};

module.exports = {
  getLines,
  getLineById,
  createLine,
  updateLines,
  deleteLine,
};
