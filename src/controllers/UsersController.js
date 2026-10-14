const Controller = require("./Controller.js");
const UsersService = require("../services/UsersService.js");

const usersService = new UsersService();

class UsersController extends Controller {
  constructor() {
    super(usersService);
  }

  async getEnrolls(req, res) {
    const { student_id } = req.params;
    try {
      const enrollments = await usersService.getEnrollsByStudent(Number(student_id));
      return res.status(200).json(enrollments);
    } catch(error) {
      //erro
    }
  }

}

module.exports = UsersController;