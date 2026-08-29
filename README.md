# Microservices Architecture with Node.js and Express

A simple **Microservices Architecture** project built using **Node.js** and **Express.js**.

This project demonstrates how multiple independent services can communicate through an **API Gateway**. It contains a User Service, Order Service, and API Gateway.

## 📌 Project Overview

The application follows a basic microservices architecture:

```text
                    Client
                      |
                      v
              +---------------+
              |  API Gateway  |
              |   Port 5000   |
              +-------+-------+
                      |
             +--------+--------+
             |                 |
             v                 v
      +-------------+   +-------------+
      | User Service|   |Order Service|
      |  Port 5001  |   |  Port 5002  |
      +-------------+   +-------------+
```

The client communicates only with the **API Gateway**.

The API Gateway forwards requests to the appropriate microservice.

---

## 🚀 Technologies Used

* Node.js
* Express.js
* JavaScript
* REST APIs
* Microservices Architecture
* HTTP/Fetch API
* JSON

---

## 📂 Project Structure

```text
Microservices/
│
├── apigateway/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── userservice/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── orderservice/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
└── README.md
```

---

# 🔹 Services

## 1. API Gateway

**Port:** `5000`

The API Gateway acts as the single entry point for clients.

It communicates with:

* User Service on port `5001`
* Order Service on port `5002`

### User Routes

```text
GET /api/users
GET /api/users/:id
```

### Order Routes

```text
GET /api/orders
GET /api/orders/:id
```

---

## 2. User Service

**Port:** `5001`

The User Service manages user information.

### Available Endpoints

#### Get all users

```http
GET http://localhost:5001/users
```

Example response:

```json
[
  {
    "id": 1,
    "name": "Kavish",
    "email": "kv@gmail.com"
  },
  {
    "id": 2,
    "name": "Suraj",
    "email": "s@hmail.com"
  },
  {
    "id": 3,
    "name": "Sneha",
    "email": "sn@gmail.com"
  }
]
```

#### Get user by ID

```http
GET http://localhost:5001/users/1
```

Example response:

```json
{
  "id": 1,
  "name": "Kavish",
  "email": "kv@gmail.com"
}
```

---

# 3. Order Service

**Port:** `5002`

The Order Service manages order information.

### Available Endpoints

#### Get all orders

```http
GET http://localhost:5002/orders
```

Example response:

```json
[
  {
    "id": 101,
    "userId": 1,
    "product": "Laptop",
    "amount": 60000
  },
  {
    "id": 102,
    "userId": 2,
    "product": "Mobile",
    "amount": 30000
  }
]
```

#### Get order by ID

```http
GET http://localhost:5002/orders/101
```

Example response:

```json
{
  "id": 101,
  "userId": 1,
  "product": "Laptop",
  "amount": 60000
}
```

---

# ⚙️ Installation

## Step 1: Install Node.js

Make sure Node.js is installed.

Check the installation:

```bash
node -v
npm -v
```

Node.js version 18 or above is recommended because the API Gateway uses the built-in `fetch()` API.

---

# Step 2: Open the Project

Open the `Microservices` folder in Visual Studio Code.

```bash
cd Microservices
```

---

# Step 3: Install Dependencies

Open three terminals in VS Code.

### Terminal 1 – User Service

```bash
cd userservice
npm install
```

### Terminal 2 – Order Service

```bash
cd orderservice
npm install
```

### Terminal 3 – API Gateway

```bash
cd apigateway
npm install
```

---

# ▶️ Running the Application

All three services must be running simultaneously.

## Terminal 1 – Start User Service

```bash
cd userservice
node server.js
```

You should see:

```text
user service running on http://localhost:5001
```

---

## Terminal 2 – Start Order Service

```bash
cd orderservice
node server.js
```

You should see:

```text
Order Service running on http://localhost:5002
```

---

## Terminal 3 – Start API Gateway

```bash
cd apigateway
node server.js
```

You should see:

```text
API Gateway running on http://localhost:5000
```

---

# 🧪 Testing the API

You can test the APIs using:

* Browser
* Postman
* Thunder Client
* REST Client extension in VS Code

---

## Test Users Through API Gateway

### Get all users

Open:

```text
http://localhost:5000/api/users
```

### Get user by ID

```text
http://localhost:5000/api/users/1
```

---

## Test Orders Through API Gateway

### Get all orders

```text
http://localhost:5000/api/orders
```

### Get order by ID

```text
http://localhost:5000/api/orders/101
```

---

# 🔄 Request Flow

For example, when the client requests:

```text
GET http://localhost:5000/api/users
```

The request reaches the API Gateway.

The API Gateway internally calls:

```text
http://localhost:5001/users
```

The User Service returns the users.

The API Gateway then sends the response back to the client.

```text
Client
  |
  | GET /api/users
  v
API Gateway :5000
  |
  | GET /users
  v
User Service :5001
  |
  | JSON Response
  v
API Gateway
  |
  v
Client
```

Similarly, for:

```text
GET http://localhost:5000/api/orders
```

the API Gateway communicates with:

```text
Order Service :5002
```

---

# ❌ Error Handling

The API Gateway handles situations where a microservice is unavailable.

For example, if the User Service is not running, the Gateway returns:

```json
{
  "message": "User Service is unavailable"
}
```

If an invalid user ID is requested:

```text
GET /api/users/999
```

the User Service returns:

```json
{
  "message": "User not found"
}
```

Similarly, an invalid order ID returns:

```json
{
  "message": "Order not found"
}
```

---

# 🏗️ Architecture Concepts Demonstrated

This project demonstrates the following microservices concepts:

### 1. Independent Services

Each service runs independently on its own port.

```text
User Service  → 5001
Order Service → 5002
```

### 2. API Gateway

The API Gateway provides a single entry point for clients.

```text
Client → API Gateway → Microservices
```

### 3. Service-to-Service Communication

The API Gateway communicates with the individual services using HTTP requests.

### 4. Separation of Responsibilities

Each service has a specific responsibility:

```text
User Service  → User management
Order Service → Order management
API Gateway   → Request routing
```

### 5. Fault Handling

The Gateway detects when a downstream service is unavailable and returns an appropriate error message.

---

# 📊 API Summary

| Service       | Port | Endpoint          | Method |
| ------------- | ---: | ----------------- | ------ |
| API Gateway   | 5000 | `/api/users`      | GET    |
| API Gateway   | 5000 | `/api/users/:id`  | GET    |
| API Gateway   | 5000 | `/api/orders`     | GET    |
| API Gateway   | 5000 | `/api/orders/:id` | GET    |
| User Service  | 5001 | `/users`          | GET    |
| User Service  | 5001 | `/users/:id`      | GET    |
| Order Service | 5002 | `/orders`         | GET    |
| Order Service | 5002 | `/orders/:id`     | GET    |

---

# 🔐 Current Project Limitations

This is a learning/demo implementation.

Currently:

* Data is stored in JavaScript arrays.
* There is no database.
* There is no authentication or authorization.
* There are no POST, PUT, or DELETE operations.
* Services communicate through localhost.
* There is no Docker/containerization.
* There is no service discovery.
* There is no centralized logging.

---

# 🔮 Future Enhancements

The project can be extended with:

* MongoDB / MySQL database
* User registration and login
* JWT authentication
* POST, PUT and DELETE APIs
* Product Service
* Payment Service
* Notification Service
* Docker containers
* Docker Compose
* Kubernetes
* Service discovery
* Load balancing
* Centralized logging
* API rate limiting
* Environment variables
* Automated testing
* Swagger/OpenAPI documentation

---

# 🎯 Learning Objectives

By completing this project, you can understand:

* What microservices architecture is
* How an API Gateway works
* How independent services communicate
* How REST APIs work
* How Express.js is used to create services
* How ports separate independent services
* How to handle service failures
* How requests are routed between services

---

# 👩‍💻 How to Run in VS Code

The easiest way is to use **three terminals**:

```text
Terminal 1
-----------
cd userservice
node server.js


Terminal 2
-----------
cd orderservice
node server.js


Terminal 3
-----------
cd apigateway
node server.js
```

Then access the application through the API Gateway:

```text
http://localhost:5000/api/users
```

or

```text
http://localhost:5000/api/orders
```

---

# 📄 License

This project is created for educational and learning purposes.
