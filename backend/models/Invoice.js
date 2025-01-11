const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true },
  clientName: { type: String, required: true },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["Paid", "Unpaid", "Pending"], required: true },
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
