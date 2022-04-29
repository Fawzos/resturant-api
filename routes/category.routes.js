const router = require("express").Router();
const Category = require("../app/controllers/category.controller");
const multer = require("multer");
const uploadFile = require("../app/middlewares/uploadFiles");

router.post("/", Category.addCategory);
router.get("/:id", Category.singleCategory);
router.post("/items/:id", Category.itemsPerCategory);
router.get("/", Category.allCategories);
router.put("/:id", Category.editCategory);
router.delete("/:id", Category.deleteCategory);
router.post("/catImg", uploadFile.single("catImg"), Category.uploadImage);

module.exports = router;
