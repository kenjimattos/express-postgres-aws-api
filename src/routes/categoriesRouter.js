const { Router } = require("express");
const CategoriesController = require("../controllers/CategoriesController.js");

const categoriesController = new CategoriesController();
const router = Router();

router.get("/categories", (req, res) => categoriesController.getAll(req, res));
router.get("/categories/:id", (req, res) => categoriesController.getById(req, res));
router.post("/categories", (req, res) => categoriesController.create(req, res));
router.put("/categories/:id", (req, res) => categoriesController.update(req, res));
router.delete("/categories/:id", (req, res) => categoriesController.deleteById(req, res));
router.post("/categories/:id/restore", (req, res) => categoriesController.restoreById(req, res));

module.exports = router;