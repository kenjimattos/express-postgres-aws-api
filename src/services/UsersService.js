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

  async deleteById(id) {
    const student = await super.getById(id);
    await student.update({ active: false });
    return student.destroy();
  }
}

module.exports = UsersService;