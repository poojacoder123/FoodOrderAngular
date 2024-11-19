const express = require('express');
const router = express.Router();
const {
  getUser,
  addUser,
  getUserByID,
  updateUser,
  deleteUser,
  loginUser
} = require("../controllers/user.controller.js");


router.post("/", addUser);
router.post("/login", loginUser);
router.get("/", getUser);
router.get("/:id", getUserByID);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;