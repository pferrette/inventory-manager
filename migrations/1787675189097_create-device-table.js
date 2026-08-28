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
  pgm.createTable("devices", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    user_id: {
      type: "integer",
    },
    hostname: {
      type: "varchar(30)",
    },
    asset_tag: {
      type: "varchar(30)",
    },
    model: {
      type: "varchar(30)",
    },
    service_tag: {
      type: "varchar(30)",
    },
    express_code: {
      type: "varchar(30)",
    },
    comments: {
      type: "varchar(254)",
    },
    warranty: {
      type: "timestamp",
    },
  });

  pgm.addConstraint("devices", "user_device_id_fk", {
    foreignKeys: {
      columns: "user_id",
      references: "users(id)",
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable("devices");
};
