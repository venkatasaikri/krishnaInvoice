import React, { useEffect, useState } from "react";
import axios from "axios";
import { isAuthenticated } from "../utils/auth";

const HomePage = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    if (!isAuthenticated()) {
      alert("Please log in to access this page.");
      window.location.href = "/";
      return;
    }

    const fetchInvoices = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5006/api/invoices", {
          headers: { "x-auth-token": token },
        });
        setInvoices(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice._id}>{invoice.clientName} - ${invoice.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
