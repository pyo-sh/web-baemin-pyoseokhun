const express = require("express");
const router = express.Router();

/* GET pages (RENDER) */
router.get("/", function (req, res, next) {
  res.render("index", {
    page: "index",
    title: "My배민",
  });
});

router.get("/login", function (req, res, next) {
  res.render("login", {
    page: "login",
  });
});

module.exports = router;
