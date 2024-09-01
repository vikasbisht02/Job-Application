const mongoose = require("mongoose");

const PdfDetailsSchema = new mongoose.Schema({
  name: String,
  email: String,
  pdf: String,
});

const PdfDetails = mongoose.model("PdfDetails", PdfDetailsSchema);

module.exports = PdfDetails;
