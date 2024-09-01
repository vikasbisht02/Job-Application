const express = require("express");
const { signup, uploadFile } = require("../controllers/authController");
const upload = require("../config/multer");

const router = express.Router();

router.post("/signup", signup);
router.post('/upload-files', upload.single('avatar'), uploadFile);

module.exports = router;
