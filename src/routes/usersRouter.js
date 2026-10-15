const { Router } = require("express");
const UsersController = require("../controllers/UsersController.js");
const EnrollsController = require("../controllers/EnrollsController.js");

const usersController = new UsersController();
const enrollsController = new EnrollsController();
const router = Router();

router.get("/users", (req, res) => usersController.getAll(req, res));
router.get("/users/all", (req, res) => usersController.getAllUsers(req, res));
router.get("/users/enrolls", (req, res) => usersController.getUsersEnrolls(req, res));
router.get("/users/:id", (req, res) => usersController.getById(req, res));

router.post("/users", (req, res) => usersController.create(req, res));
router.post("/users/:id/activate", (req, res) => usersController.activateUser(req, res));

router.put("/users/:id", (req, res) => usersController.updateById(req, res));

router.delete("/users/:id", (req, res) => usersController.deleteById(req, res));
router.post("/users/:id/restore", (req, res) => usersController.restoreById(req, res));

router.get("/users/:student_id/enrolls", (req, res) => usersController.getEnrolls(req, res));
router.post("/users/:student_id/enrolls", (req, res) => enrollsController.create(req, res));

module.exports = router;