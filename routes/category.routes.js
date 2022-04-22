const router = require("express").Router();
const Category = require("../app/controllers/category.controller");

router.post("/", Category.addCategory);
router.get("/:id", Category.singleCategory);
router.get("/", Category.allCategories);
router.put("/:id", Category.editCategory);
router.delete("/:id", Category.deleteCategory);

module.exports = router;
