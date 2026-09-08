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
  pgm.createTable("term_status", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    user_id: {
      type: "integer",
    },
    device_id: {
      type: "integer",
    },
    mobile_id: {
      type: "integer",
    },
    is_signed: {
      type: "boolean",
    },
    signed_date: {
      type: "timestamp",
    },
  });

  pgm.createConstraint("term_status", "user_term_fk", {
    foreignKeys: {
      columns: "user_id",
      references: "users(id)",
    },
  });

  pgm.createConstraint("term_status", "device_term_fk", {
    foreignKeys: {
      columns: "device_id",
      references: "devices(id)",
    },
  });

  pgm.createConstraint("term_status", "mobile_term_fk", {
    foreignKeys: {
      columns: "mobile_id",
      references: "mobiles(id)",
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable("term_status");
};
