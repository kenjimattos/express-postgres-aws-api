const { Router } = require("express");
const UsersController = require("../controllers/UsersController.js");

const router = Router();

router.get("/users", UsersController.getAll);

module.exports = router;