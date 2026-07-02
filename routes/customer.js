const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const customers = [
        { CustomerID: "C101", CustomerName: "Vikas Bhaghat", CustomerAddress: "KR Puram", CustomerPhone: "88776665" },
        { CustomerID: "C102", CustomerName: "Rahul Sharma", CustomerAddress: "Whitefield", CustomerPhone: "9876543210" },
        { CustomerID: "C103", CustomerName: "Priya Singh", CustomerAddress: "Indiranagar", CustomerPhone: "9988776655" },
        { CustomerID: "C104", CustomerName: "Amit Kumar", CustomerAddress: "Jayanagar", CustomerPhone: "9123456780" },
        { CustomerID: "C105", CustomerName: "Sneha Patil", CustomerAddress: "BTM Layout", CustomerPhone: "9345678901" },
        { CustomerID: "C106", CustomerName: "Rohan Das", CustomerAddress: "Electronic City", CustomerPhone: "9012345678" },
        { CustomerID: "C107", CustomerName: "Anjali Rao", CustomerAddress: "Marathahalli", CustomerPhone: "9988123456" },
        { CustomerID: "C108", CustomerName: "Kiran Joshi", CustomerAddress: "Yelahanka", CustomerPhone: "9876501234" },
        { CustomerID: "C109", CustomerName: "Meera Nair", CustomerAddress: "Hebbal", CustomerPhone: "9123409876" },
        { CustomerID: "C110", CustomerName: "Arjun Reddy", CustomerAddress: "Malleshwaram", CustomerPhone: "9871234567" }
    ];

    res.json(customers);
});

module.exports = router;