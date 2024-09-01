const express = require("express");
const { signup } = require("../controllers/authController.js");
const { uploadFile } = require("../controllers/authController.js");

const upload = require("../config/multer.js");

const router = express.Router();

router.post("/signup", signup);


router.post('/upload-files', upload.single('avatar'), uploadFile);

module.exports = router;
