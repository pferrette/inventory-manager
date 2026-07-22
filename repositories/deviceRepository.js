const { pool } = require("../database.js");

const getDevices = async (req, res) => {
  try {
    const results = await pool.query(
      `SELECT "Devices"."Id","Name" as "User",	"Hostname",	"AssetTag",	"Model",	"ServiceTag",	"ExpressCode",	"Warranty",	"Comments" FROM "Devices" INNER JOIN "users" ON "Devices"."UserID" = "users"."Id";`,
    );
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

const makeComment = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const { comment } = req.body;
  try {
    await pool.query('UPDATE "Devices" SET "Comments" = $1 WHERE "Id" = $2', [
      comment,
      id,
    ]);

    res.status(200).send(`Comment saved to DeviceID: ${id}`);
  } catch (error) {
    throw error;
  } finally {
    // await pool.end();
  }
};

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

const changeUser = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const { newUser, userId } = req.body;
  console.log({ newUser, id });
  try {
    await pool.query(
      `UPDATE "Devices"
        SET "UserID" = (
        SELECT "Id"
        FROM "users"
          WHERE "Name" = $1)
      WHERE "Id" = $2`,
      [newUser, id],
    );
    //await pool.query(`INSERT INTO "LastChange" ("ComputerID","FromUser","ToUserID","ChangedDate") Values($1,$2,$3,$4);`,[id,])
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getDevices,
  makeComment,
  changeUser,
};
