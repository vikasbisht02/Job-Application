const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require('multer');
const connectDB = require("./db/connectDB.js");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // Add this middleware to parse form data
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Ensure that the model is loaded
require("./models/pdfDetails.js");
const PdfSchema = mongoose.model("PdfDetails");
app.use("/files", express.static("files"));
app.post('/upload-files', upload.single('avatar'), async (req, res, next) => {
  const fileName = req.file.filename;  // Get the uploaded file's filename
  const { name, email } = req.body;  // Destructure name and email from req.body

  // Debugging logs
  console.log("File name:", fileName);
  console.log("Name:", name);
  console.log("Email:", email);

  try {
    // Save name, email, and pdf filename to the database
    const pdfRecord = await PdfSchema.create({ name, email, pdf: fileName });
    console.log("Record saved:", pdfRecord);  // Debugging log for saved record
    res.status(200).json({ status: "ok", message: "Data uploaded successfully" });
  } catch (error) {
    console.error("Error saving record:", error);  // Debugging log for errors
    res.status(500).json({ status: error.message });
  }
});

app.use("/", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port: ", PORT);
});
