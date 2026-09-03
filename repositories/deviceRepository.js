const { pool } = require("../database.js");

const getDevices = async (req, res) => {
  try {
    const results = await pool.query(
      `SELECT "devices"."id","name" as "user",	"hostname",	"asset_tag",	"model",	"service_tag",	"express_code",	"warranty",	"comments" FROM "devices" INNER JOIN "users" ON "devices"."user_id" = "users"."id";`,
    );
    res.status(200).json({ device: results.rows });
  } catch (error) {
    throw error;
  } finally {
    //await pool.end();
  }
};

const makeComment = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const { comment } = req.body;
  try {
    await pool.query('UPDATE "devices" SET "comments" = $1 WHERE "id" = $2', [
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

const changeUser = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const { newUser, userId } = req.body;
  console.log({ newUser, id });
  try {
    await pool.query(
      `UPDATE "devices"
        SET user_id = (
        SELECT "id"
        FROM users
          WHERE "name" = $1)
      WHERE id = $2`,
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
