"use strict";
const { Model } = require("sequelize");
const { validateCpf } = require("../../utils/validateCpf.js");

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
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "E-mail format is not valid."
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        isCPF(value) {
          if (!validateCpf(value)) {
            throw new Error("CPF format is not valid.");
          }
        }
      }
    },
    active: DataTypes.BOOLEAN,
    role: DataTypes.ENUM("instructor", "student")
  }, {
    sequelize,
    modelName: "User",
    tableName: "users",
    paranoid: true,
    defaultScope: {
      where: {
        active: true
      }
    },
    scopes: {
      allEntries: {
        where: {}
      }
    }
  });
  return User;
};