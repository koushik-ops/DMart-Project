const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const payments = [
        { TransactionID: "TXN501", CustomerID: "C101", Amount: 105.65, PaymentMode: "UPI", Status: "Success" },
        { TransactionID: "TXN502", CustomerID: "C102", Amount: 42.25, PaymentMode: "Cash", Status: "Success" },
        { TransactionID: "TXN503", CustomerID: "C103", Amount: 153.33, PaymentMode: "Credit Card", Status: "Success" },
        { TransactionID: "TXN504", CustomerID: "C104", Amount: 21.00, PaymentMode: "UPI", Status: "Success" },
        { TransactionID: "TXN505", CustomerID: "C105", Amount: 89.72, PaymentMode: "Debit Card", Status: "Pending" },
        { TransactionID: "TXN506", CustomerID: "C106", Amount: 512.00, PaymentMode: "UPI", Status: "Success" },
        { TransactionID: "TXN507", CustomerID: "C107", Amount: 75.50, PaymentMode: "Cash", Status: "Failed" },
        { TransactionID: "TXN508", CustomerID: "C108", Amount: 120.00, PaymentMode: "Credit Card", Status: "Success" },
        { TransactionID: "TXN509", CustomerID: "C109", Amount: 450.25, PaymentMode: "UPI", Status: "Success" },
        { TransactionID: "TXN510", CustomerID: "C110", Amount: 18.90, PaymentMode: "Cash", Status: "Success" }
    ];

    res.json(payments);
});

module.exports = router;