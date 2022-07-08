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

router.get("/signup/terms", function (req, res, next) {
  res.render("signup/terms", {
    page: "terms",
    title: "회원가입",
  });
});

router.get("/signup/phone", function (req, res, next) {
  res.render("signup/phone", {
    page: "phone",
    title: "회원가입",
  });
});

router.get("/signup/others", function (req, res, next) {
  res.render("signup/others", {
    page: "others",
    title: "회원가입",
  });
});

module.exports = router;
