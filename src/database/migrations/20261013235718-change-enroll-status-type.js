"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("enrolls", "status", {
      type: Sequelize.ENUM("active", "inactive", "pending"),
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("enrolls", "status", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
