const { Router } = require("express");
const CoursesController = require("../controllers/CoursesController.js");

const coursesController = new CoursesController();
const router = Router();

router.get("/courses", (req, res) => coursesController.getAll(req, res));
router.get("/courses/:id", (req, res) => coursesController.getById(req, res));
router.post("/courses", (req, res) => coursesController.create(req, res));
router.put("/courses/:id", (req, res) => coursesController.update(req, res));
router.delete("/courses/:id", (req, res) => coursesController.delete(req, res));
router.post("/courses/:id/restore", (req, res) => coursesController.restore(req, res));

module.exports = router;