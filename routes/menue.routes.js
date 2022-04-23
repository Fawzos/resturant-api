const router = require("express").Router();
const Menue = require("../app/controllers/menue.controller");

router.post("/", Menue.addMenue);
router.get("/:id", Menue.singleMenue);
router.get("/", Menue.allMenues);
router.put("/:id", Menue.editMenue);
router.delete("/:id", Menue.deleteMenue);

module.exports = router;
