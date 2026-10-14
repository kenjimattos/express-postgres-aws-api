"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Course, {
        foreignKey: "instructor_id"
      });
      User.hasMany(models.Enroll, {
        foreignKey: "student_id",
        scope: { status: "active" },
        as: "enrollments"
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    role: DataTypes.ENUM("instructor", "student")
  }, {
    sequelize,
    modelName: "User",
    tableName: "users"
  });
  return User;
};