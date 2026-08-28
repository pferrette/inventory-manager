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
  pgm.createTable("config_infos", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    user_id: {
      type: "integer",
    },
    mobile_id: {
      type: "integer",
    },
    pin: {
      type: "varchar(10)",
    },
    email: {
      type: "varchar(50)",
    },
    password: {
      type: "varchar(20)",
    },
  });

  pgm.createConstraint("config_infos", "user_config_info_fk", {
    foreignKeys: {
      columns: "user_id",
      references: "users(id)",
    },
  });

  pgm.createConstraint("config_infos", "from_user_change_fk", {
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
  pgm.dropTable("config_infos");
};
