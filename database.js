require("dotenv").config();

const { Client, Pool } = require("pg");

const pool = new Pool({
  host: process.env.PGHOST,
  port: "5432",
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  ssl: process.env.NODE_ENV === "production" ? true : false,
});

const getUsers = async (req, res) => {
  try {
    const results = await pool.query(`select * from "Users"`);
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
    const results = await pool.query(`SELECT * FROM "Users" WHERE "Id"=${id}`);
    res.status(200).json(results.rows);
  } catch (error) {
    throw error;
  } finally {
    //await pool.end();
  }
};

const createUser = async (req, res) => {
  const { name, cc } = req.body;
  try {
    const results = await pool.query(`INSERT INTO "Users" ("Name", "CC")
VALUES ('${name}', '${cc}');`);
    res.status(201).send(`User Added`);
  } catch (error) {
    throw error;
  } finally {
    // await pool.end();
  }
};

module.exports = { getUsers, createUser, getUserById };
