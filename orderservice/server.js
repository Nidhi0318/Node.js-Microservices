const express = require("express");
const app = express();

const PORT = 5002;

// Middleware
app.use(express.json());

// Temporary order data
let orders = [
    {
        id: 101,
        userId: 1,
        product: "Laptop",
        amount: 60000
    },
    {
        id: 102,
        userId: 2,
        product: "Mobile",
        amount: 30000
    }
];

// -------------------------
// GET ALL ORDERS
// -------------------------
app.get("/orders", (req, res) => {

    res.json(orders);

});

// -------------------------
// GET ORDER BY ID
// -------------------------
app.get("/orders/:id", (req, res) => {

    const id = Number(req.params.id);

    const order =
        orders.find(order => order.id === id);

    if (!order) {

        return res.status(404).json({
            message: "Order not found"
        });

    }

    res.json(order);

});
app.listen(PORT, () => {

    console.log(
        `Order Service running on http://localhost:${PORT}`
    );

});
