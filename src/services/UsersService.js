const Service = require("./Service.js");

class UsersService extends Service {
  constructor() {
    super("User");
  }

  async getAllUsers() {
    return await super.getByScope("allEntries");
  }

  async getEnrollsByStudent(id) {
    const student = await super.getById(id);
    const enrollmentsList = await student.getEnrollments();

    return enrollmentsList;
  }

  async activateById(id) {
    const student = await this.model.scope("allEntries").findByPk(id, { paranoid: false });
    const isActive = student.active;

    if (!student) return null;
    if (!isActive) await student.update({ active: true });

    return student;
  }

  async deleteById(id) {
    const student = await super.getById(id);
    await student.update({ active: false });
    return student.destroy();
  }
}

module.exports = UsersService;