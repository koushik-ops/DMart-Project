const express = require("express");

const app = express();

const product = require("./routes/product");
const customer = require("./routes/customer");
const employee = require("./routes/employee");
const payment = require("./routes/payment");

app.use("/product", product);
app.use("/customer", customer);
app.use("/employee", employee);
app.use("/payment", payment);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to DMART API",
        endpoints: [
            "/product",
            "/customer",
            "/employee",
            "/payment"
        ]
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});