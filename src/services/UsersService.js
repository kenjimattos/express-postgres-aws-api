const Service = require("./Service.js");

class UsersService extends Service {
  constructor() {
    super("User");
  }

  async getEnrollsByStudent(id) {
    const student = await super.getById(id);
    const enrollmentsList = await student.getEnrollments();

    return enrollmentsList;
  }
}

module.exports = UsersService;