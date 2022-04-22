const router = require("express").Router();
const Category = require("../app/controller/category.controller");

router.post("/addCategory", Category.addCategory);
router.get("/singleCategory/:id", Category.singleCategory);
router.get("/allCategories", Category.allCategories);
router.put("/editCategory/:id", Category.editCategory);
router.delete("/deleteCategory/:id", Category.deleteCategory);

module.exports = router;
