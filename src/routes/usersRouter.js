const { Router } = require("express");
const UsersController = require("../controllers/UsersController.js");

const usersController = new UsersController();
const router = Router();

router.get("/users", (req, res) => usersController.getAll(req, res));
router.get("/users/:id", (req, res) => usersController.getById(req, res));
router.post("/users", (req, res) => usersController.create(req, res));
router.put("/users/:id", (req, res) => usersController.updateById(req, res));
router.delete("/users/:id", (req, res) => usersController.deleteById(req, res));

module.exports = router;