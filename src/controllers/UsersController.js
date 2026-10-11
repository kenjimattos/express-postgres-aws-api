const database = require("../models");

class UsersController {
  static async getAll(req, res) {
    try{
      const usersList = await database.User.findAll();
      return res.status(200).json(usersList);
    } catch (error) {
      //erro
    }
  }
}

module.exports = UsersController