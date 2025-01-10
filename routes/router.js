const { Router } = require("express");
const homeController = require("../controllers/homeController");
const itemController = require("../controllers/itemController");
const router = Router();

router.get("/", homeController.get);
router.get("/category/:categoryId/items", itemController.getAllCategoryItems);


module.exports = router;
