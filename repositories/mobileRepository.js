const { pool } = require("../database.js");

async function getMobiles() {
  try {
    const results = await pool.query(`SELECT
        m.id,
        u.name,
        m.user_id,
        m.imei,
        m.model,
        COALESCE(l.number, 'not assigned') AS line_number,
        m.line_id,
        m.buy_date,
        m.price,
        m.payment_status,
        m.tranche_price
    FROM mobiles AS m
    INNER JOIN users AS u
        ON m.user_id = u.id
    LEFT JOIN lines AS l
        ON m.line_id = l.id;`);
    return results.rows;
  } catch (error) {
    throw error;
  }
}

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
    await pool.query(
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

async function changeUser(data) {
  const { user_id, id } = data;
  await pool.query(
    `
    UPDATE mobiles SET user_id = $1 WHERE id = $2
    `,
    [user_id, id],
  );
}

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
  changeUser,
};
