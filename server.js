const express = require("express");

const app = express();
const port = 5000;

// middleware
app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});

// welcome route
app.get("/welcome", (req, res) => {
  res.send("Welcome to Express Learning");
});

// student route
app.get("/student", (req, res) => {
  res.json({
    name: "John",
    course: "MERN Stack",
    batch: 13
  });
});

// search route with query
app.get("/search", (req, res) => {
  res.json(req.query);
});

// register route with json body
app.post("/register", (req, res) => {
  res.json({
    message: "Registration successful",
    data: req.body
  });
});

// product route with query parameter
app.post("/product", (req, res) => {
  const id = req.query.id;

  res.json({
    productId: id
  });
});

// login route with headers
app.post("/login", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

  res.json({
    username,
    password
  });
});

// server start
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});