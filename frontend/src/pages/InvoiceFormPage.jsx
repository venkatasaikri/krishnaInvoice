import React, { useState } from "react";
import axios from "axios";

const InvoiceFormPage = () => {
  const [invoice, setInvoice] = useState({
    invoiceNumber: "",
    clientName: "",
    date: "",
    amount: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:5006/api/invoices", invoice).then(() => {
      alert("Invoice saved!");
    });
  };

  return (
    <div>
      <h1>Invoice Form</h1>
      <input
        name="invoiceNumber"
        placeholder="Invoice Number"
        onChange={handleChange}
      />
      <input name="clientName" placeholder="Client Name" onChange={handleChange} />
      <input type="date" name="date" onChange={handleChange} />
      <input name="amount" placeholder="Amount" onChange={handleChange} />
      <select name="status" onChange={handleChange}>
        <option value="Paid">Paid</option>
        <option value="Unpaid">Unpaid</option>
        <option value="Pending">Pending</option>
      </select>
      <button onClick={handleSubmit}>Save Invoice</button>
    </div>
  );
};

export default InvoiceFormPage;
