const Controller = require('./Controller.js');
const UsersService = require('../services/UsersService.js');

const usersService = new UsersService();

class UsersController extends Controller {
  constructor() {
    super(usersService);
  }

}

module.exports = UsersController