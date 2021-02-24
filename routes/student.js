const express = require("express");
const router = express.Router();

const { getStudents, createStudent } = require("../controllers/student");

router.get("/students", getStudents);
router.post("/createStudent", createStudent);

module.exports = router;
