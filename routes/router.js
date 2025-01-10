const { Router } = require("express");
const urlController = require("../controllers/urlController");
const router = Router();

router.get("/", urlController.getHome);
router.post("/shortUrl", urlController.createShortURL);
router.get("/:shortUrl", urlController.getWebpage);

module.exports = router;
