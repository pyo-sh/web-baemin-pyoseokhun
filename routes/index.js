const express = require("express");
const router = express.Router();

/* GET pages (RENDER) */
router.get("/", function (req, res, next) {
  res.render("index", {
    page: "index",
  });
});

module.exports = router;
