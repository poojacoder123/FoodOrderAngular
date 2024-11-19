const express = require("express");
const router = express.Router();
const {
  getCategory,
  createCategory,
} = require("../controllers/category.controller.js");

router.get("/", getCategory);

router.post("/", createCategory);


 module.exports = router;