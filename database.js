const Database = require("better-sqlite3");
const db = new Database("test.db");

db.exec("SELECT * FROM Users");

module.exports = db;
