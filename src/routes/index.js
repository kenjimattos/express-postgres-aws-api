const express = require("express");

const users = require("./usersRouter.js");
const categories = require("./categoriesRouter.js");
const courses = require("./coursesRouter.js");

module.exports = (app) => {
  app.use(
    express.json(),
    users,
    categories,
    courses
  );
};