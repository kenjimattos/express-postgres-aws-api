"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      for (const table of ["users", "categories", "courses", "enrolls"]) {
        await queryInterface.addColumn(
          table,
          "deletedAt",
          { allowNull: true, type: Sequelize.DATE },
          { transaction },
        );
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      for (const table of ["users", "categories", "courses", "enrolls"]) {
        await queryInterface.removeColumn(table, "deletedAt", { transaction });
      }
    });
  },
};
