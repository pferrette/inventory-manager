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

module.exports = {
  pool,
};
