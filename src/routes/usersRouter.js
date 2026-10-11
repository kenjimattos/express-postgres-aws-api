const { Router } = require("express");
const UsersController = require("../controllers/UsersController.js");

const usersController = new UsersController();
const router = Router();

router.get("/users", (req, res) => usersController.getAll(req, res));

module.exports = router;