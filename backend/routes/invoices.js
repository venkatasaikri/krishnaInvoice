const express = require("express");
const router = express.Router();

// Example endpoints
router.get("/", (req, res) => {
  res.json({ message: "Invoices fetched successfully!" });
});

module.exports = router;
