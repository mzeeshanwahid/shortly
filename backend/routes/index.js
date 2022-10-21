const express = require("express");
const router = express.Router();

const linkRouter = require("./link");

router.get("/", (req, res, next) => {
  res.send({ status: "API is Operational" });
});

router.use("/link", linkRouter);

router.get("*", (req, res, next) => {
  res.status(500).json({
    message: "Invalid address",
  });
});

module.exports = router;
