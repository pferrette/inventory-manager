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
  pgm.createTable("last_changes", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    device_id: {
      type: "integer",
    },
    reason: {
      type: "varchar(254)",
    },
    from_user_id: {
      type: "integer",
    },
    to_user_id: {
      type: "integer",
    },
    changed_date: {
      type: "timestamp",
    },
  });

  pgm.createConstraint("last_changes", "device_change_fk", {
    foreignKeys: {
      columns: "device_id",
      references: "devices(id)",
    },
  });

  pgm.createConstraint("last_changes", "from_user_change_fk", {
    foreignKeys: {
      columns: "from_user_id",
      references: "users(id)",
    },
  });

  pgm.createConstraint("last_changes", "to_user_change_fk", {
    foreignKeys: {
      columns: "to_user_id",
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
  pgm.dropTable("last_changes");
};
