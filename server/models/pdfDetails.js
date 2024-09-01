const mongoose = require("mongoose");

const PdfDetailsSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    pdf: String,
  },
  { collection: "PdfDetails" }
);

mongoose.model("PdfDetails", PdfDetailsSchema);
