const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const employees = [
        { EmployeeID: "E201", EmployeeName: "Ramesh Kumar", Designation: "Manager", Salary: 75000 },
        { EmployeeID: "E202", EmployeeName: "Sita Lakshmi", Designation: "Assistant Manager", Salary: 55000 },
        { EmployeeID: "E203", EmployeeName: "John Doe", Designation: "Cashier", Salary: 35000 },
        { EmployeeID: "E204", EmployeeName: "Amina Begum", Designation: "Inventory Supervisor", Salary: 42000 },
        { EmployeeID: "E205", EmployeeName: "Vikram Malhotra", Designation: "Sales Executive", Salary: 28000 },
        { EmployeeID: "E206", EmployeeName: " Kavitha Reddy", Designation: "HR Executive", Salary: 45000 },
        { EmployeeID: "E207", EmployeeName: "Arun Verma", Designation: "Security Head", Salary: 30000 },
        { EmployeeID: "E208", EmployeeName: "Deepa Nair", Designation: "Billing Clerk", Salary: 26000 },
        { EmployeeID: "E209", EmployeeName: "Rajesh Patil", Designation: "Logistics Coordinator", Salary: 38000 },
        { EmployeeID: "E210", EmployeeName: " Pooja Sharma", Designation: "Customer Support", Salary: 25000 }
    ];

    res.json(employees);
});

module.exports = router;