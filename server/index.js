const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/connectDB.js");
const authRoutes = require("./routes/authRoutes.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/files", express.static("files"));

// Routes
app.use("/", authRoutes);

// Start Server
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Server is running on port:", PORT);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
});
