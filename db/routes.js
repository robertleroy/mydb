const express = require("express");
// const cors = require('cors');
const router = express.Router();
const controllers = require("./controllers");

router.use(express.json());
// router.use(cors({
//   origin: '*'
// }));


router.get("/", controllers.getData);
router.get("/:id", controllers.getItem);
router.post("/", controllers.addItem);
router.put("/:id", controllers.updateItem);
router.delete("/:id", controllers.deleteItem);


module.exports = router;