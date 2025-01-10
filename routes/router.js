const { Router } = require("express");
const urlController = require("../controllers/homeController");
const router = Router();

router.get("/", urlController.get);

//router.get("/category/:categoryId/items", itemController.getAllCategoryItems);


module.exports = router;
