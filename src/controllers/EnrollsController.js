const Controller = require("./Controller.js");
const EnrollsService = require("../services/EnrollsService.js");

const enrollsService = new EnrollsService();

class EnrollsController extends Controller {
  constructor() {
    super(enrollsService);
  }

}

module.exports = EnrollsController;