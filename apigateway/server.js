const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.json());

// ==================================================
// USER SERVICE
// ==================================================

// GET ALL USERS
app.get("/api/users", async (req, res) => {

    try {

        const response =
            await fetch("http://localhost:5001/users");

        const data =
            await response.json();

        res.status(response.status).json(data);

    } catch (error) {

        res.status(500).json({
            message: "User Service is unavailable"
        });

    }

});

// GET USER BY ID
app.get("/api/users/:id", async (req, res) => {

    try {

        const response =
            await fetch(
                `http://localhost:5001/users/${req.params.id}`
            );

        const data =
            await response.json();

        res.status(response.status).json(data);

    } catch (error) {

        res.status(500).json({
            message: "User Service is unavailable"
        });

    }

});
// GET ALL ORDERS
app.get("/api/orders", async (req, res) => {

    try {

        const response =
            await fetch("http://localhost:5002/orders");

        const data =
            await response.json();

        res.status(response.status).json(data);

    } catch (error) {

        res.status(500).json({
            message: "Order Service is unavailable"
        });

    }

});

// GET ORDER BY ID
app.get("/api/orders/:id", async (req, res) => {

    try {

        const response =
            await fetch(
                `http://localhost:5002/orders/${req.params.id}`
            );

        const data =
            await response.json();

        res.status(response.status).json(data);

    } catch (error) {

        res.status(500).json({
            message: "Order Service is unavailable"
        });

    }

});
app.get("/", (req, res) => {
    res.json({
        message: "API Gateway is running",
        routes: {
            users: "/api/users",
            orders: "/api/orders"
        }
    });
});

app.listen(PORT, () => {

    console.log(
        `API Gateway running on http://localhost:${PORT}`
    );

});
