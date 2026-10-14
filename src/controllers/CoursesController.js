const Controller = require("./Controller.js");
const CoursesService = require("../services/CoursesService.js");

const coursesService = new CoursesService();

class CoursesController extends Controller {
  constructor() {
    super(coursesService);
  }

}

module.exports = CoursesController;