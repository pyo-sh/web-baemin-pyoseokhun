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

router.get("/terms", function (req, res, next) {
  res.render("terms", {
    page: "terms",
    title: "회원가입",
  });
});

router.get("/telecheck", function (req, res, next) {
  res.render("telecheck", {
    page: "telecheck",
    title: "회원가입",
  });
});

module.exports = router;
