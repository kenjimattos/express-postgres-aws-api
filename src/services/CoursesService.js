const Service = require("./Service.js");

class CoursesService extends Service {
  constructor() {
    super("Course");
  }
}

module.exports = CoursesService;