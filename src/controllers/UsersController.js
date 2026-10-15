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

  async getAllUsers(req, res) {
    try {
      const allUsers = await usersService.getAllUsers();
      return res.status(200).json(allUsers);
    } catch(error) {
      //erro
    }
  }

  async getUsersEnrolls(req, res) {
    try {
      const usersEnrolled = await usersService.getByScope("enrolls");
      return res.status(200).json(usersEnrolled);
    } catch(error) {
      console.error(error);
    }
  }

  async activateUser(req, res) {
    const { id } = req.params;
    try {
      const activatedUser = await usersService.activateById(Number(id));

      if (activatedUser) {
        return res.status(200).json(activatedUser);
      } else {
        return res.status(404).json({ message: `User ${id} not found.` });
      }
    } catch(error) {
      //erro
    }
  }
}

module.exports = UsersController;