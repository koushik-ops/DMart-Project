const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const products = [
        { ProductID: "P301", ProductName: "Basmati Rice 5kg", Category: "Grocery", Price: 450, Stock: 120 },
        { ProductID: "P302", ProductName: "Sunflower Oil 1L", Category: "Grocery", Price: 165, Stock: 200 },
        { ProductID: "P303", ProductName: "Dark Chocolate Bar", Category: "Snacks", Price: 90, Stock: 350 },
        { ProductID: "P304", ProductName: "Organic Honey 500g", Category: "Packaged Foods", Price: 299, Stock: 85 },
        { ProductID: "P305", ProductName: "Washing Powder 2kg", Category: "Household", Price: 340, Stock: 150 },
        { ProductID: "P306", ProductName: "Dishwashing Liquid", Category: "Household", Price: 110, Stock: 180 },
        { ProductID: "P307", ProductName: "Whole Wheat Bread", Category: "Bakery", Price: 45, Stock: 60 },
        { ProductID: "P308", ProductName: "Greek Yogurt 200g", Category: "Dairy", Price: 65, Stock: 95 },
        { ProductID: "P309", ProductName: "Green Tea 25 Bags", Category: "Beverages", Price: 140, Stock: 110 },
        { ProductID: "P310", ProductName: "Liquid Handwash Refill", Category: "Personal Care", Price: 99, Stock: 220 }
    ];

    res.json(products);
});

module.exports = router;