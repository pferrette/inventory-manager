const { pool } = require("../database.js");

const getDevices = async (req, res) => {
  try {
    const results = await pool.query(`select * from "Devices"`);
    res.status(200).json({ device: results.rows });
  } catch (error) {
    throw error;
  } finally {
    //await pool.end();
  }
};

// const getUserById = async (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   console.log(id);
//   try {
//     const results = await pool.query(`SELECT * FROM "Users" WHERE "Id"=${id}`);
//     res.status(200).json(results.rows);
//   } catch (error) {
//     throw error;
//   } finally {
//     //await pool.end();
//   }
// };

// const createUser = async (req, res) => {
//   const { name, cc, email } = req.body;
//   try {
//     const results = await pool.query(
//       `INSERT INTO "Users" ("Name", "CC", "Email")
//    VALUES ($1, $2, $3)`,
//       [name, cc, email],
//     );
//     res.status(201).send(`User Added`);
//   } catch (error) {
//     throw error;
//   } finally {
//     // await pool.end();
//   }
// };

// const updateUsers = async (req, res) => {
//   const id = parseInt(req.params.id, 10);

//   const { name, cc, email } = req.body;
//   try {
//     await pool.query(
//       'UPDATE "Users" SET "Name" = $1, "CC" = $2, "Email" = $3 WHERE "Id" = $4',
//       [name, cc, email, id],
//     );

//     res.status(200).send(`User modified with ID: ${id}`);
//   } catch (error) {
//     throw error;
//   } finally {
//     // await pool.end();
//   }
// };

// const deleteUsers = async (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   try {
//     console.log(id);
//     await pool.query('DELETE FROM "Users" WHERE "Id" = $1', [id]);
//   } catch (error) {
//     throw error;
//   } finally {
//     // await pool.end();
//   }
// };

module.exports = {
  getDevices,
  // createUser,
  // getUserById,
  // updateUsers,
  // deleteUsers,
};
