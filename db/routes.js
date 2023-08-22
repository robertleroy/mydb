const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.use(express.json());


router.get("/", controllers.getData);
router.get("/:id", controllers.getItem);
router.post("/", controllers.addItem);
router.put("/:id", controllers.updateItem);
router.delete("/:id", controllers.deleteItem);


module.exports = router;