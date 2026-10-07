const { pool } = require("../database.js");

const getDevices = async (req, res) => {
  try {
    const results = await pool.query(
      `SELECT devices.id,
           users.name,
           user_id,
           hostname,
           asset_tag,
           model,
           service_tag,
           express_code,
           warranty,
           comments 
        FROM devices 
        INNER JOIN users ON devices.user_id = users.id;`,
    );
    res.status(200).json({ device: results.rows });
  } catch (error) {
    throw error;
  } finally {
    //await pool.end();
  }
};

async function getById(id) {
  try {
    const result = await pool.query(`SELECT * from devices WHERE id=$1;`, [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function getByUserId(userId) {
  try {
    const result = await pool.query(
      `SELECT * from devices WHERE user_id = $1;`,
      [userId],
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

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
  }
};

async function changeUser(data) {
  const { to_user_id, id } = data;

  try {
    const device = await pool.query(
      `UPDATE devices
        SET user_id = $1 
        WHERE id = $2 RETURNING *`,
      [to_user_id, id],
    );
    return device.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getDevices,
  makeComment,
  changeUser,
  getById,
  getByUserId,
};
