const express = require("express");
const router = express.Router();

const linkController = require("../controllers/link");

router.get("/:link", linkController.getLink);
router.post("/", linkController.createShortLink);

module.exports = router;
