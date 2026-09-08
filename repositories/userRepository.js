const { pool } = require("../database");

const getUsers = async (req, res) => {
  try {
    const results = await pool.query(`SELECT * FROM "users"`);
    res.status(200).json({ user: results.rows });
  } catch (error) {
    throw error;
  } finally {
    //await pool.end();
  }
};

const getUserById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  console.log(id);
  try {
    const results = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    throw error;
  } finally {
    //await pool.end();
  }
};

const createUser = async (userData) => {
  const { name, center_cost, email } = userData;
  try {
    const result = await pool.query(
      `INSERT INTO users (name, center_cost, email)
   VALUES ($1, $2, $3) 
   RETURNING *`,
      [name, center_cost, email],
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  } finally {
    // await pool.end();
  }
};

const updateUsers = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const { name, center_cost, email } = req.body;
  try {
    await pool.query(
      "UPDATE users SET name = $1, center_cost = $2, email = $3 WHERE id = $4",
      [name, center_cost, email, id],
    );

    res.status(200).send(`User modified with ID: ${id}`);
  } catch (error) {
    throw error;
  } finally {
    // await pool.end();
  }
};

const deleteUsers = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    console.log(id);
    await pool.query('DELETE FROM "users" WHERE "id" = $1', [id]);
  } catch (error) {
    throw error;
  } finally {
    // await pool.end();
  }
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUsers,
  deleteUsers,
};
