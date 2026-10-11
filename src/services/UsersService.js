const Service = require("./Service.js");

class UsersService extends Service {
  constructor() {
    super("User");
  }
}

module.exports = UsersService;