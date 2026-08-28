/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable("mobiles", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    user_id: {
      type: "integer",
    },
    imei: {
      type: "varchar(30)",
    },
    model: {
      type: "varchar(30)",
    },
    out_of_policy: {
      type: "boolean",
    },
    line_id: {
      type: "integer",
    },
  });
  pgm.addConstraint("mobiles", "user_mobile_id_fk", {
    foreignKeys: {
      columns: "user_id",
      references: "users(id)",
    },
  });
  pgm.addConstraint("mobiles", "line_mobile_id_fk", {
    foreignKeys: {
      columns: "line_id",
      references: "lines(id)",
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable("mobiles");
};
