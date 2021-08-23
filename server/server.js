// Initialize Express
const express = require("express"); // Include the Module
const app = express(); // Create an instance

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Sample data
let users = [
  {
    id: 0,
    fname: "Jack",
    lname: "Jones",
  },
  {
    id: 1,
    fname: "John",
    lname: "Doe",
  },
];

// Create route handlers / API endpoints
app.get("/", (req, res) => {
  // res.send("Hello"); // Send plain text as a response
  res.sendFile(__dirname + "/index.html"); // Send HTML file as a response
});

app.get("/user", (req, res) => {
  res.json(users); // Send JSON as a response
});

app.get("/user/:id", (req, res) => {
  if (req.params.id <= 10) {
    res.send(req.params.id);
  } else {
    res.status(404).send("Sorry, not found!");
  }
});

app.post("/submitForm", (req, res) => {
  res.json(req.body); // Send body as a response
});

app.post("/user", function (req, res) {
  res.send(req.query); // Send query as a response
});

app.put("/user", function (req, res) {
  // Add a User to database operations
  res.send("Got a PUT request at /user"); // Send plain text as a response
});

app.delete("/user", function (req, res) {
  // Delete a user from the database operations
  res.send("Got a DELETE request at /user"); // Send plain text as a response
});

// Start the Express.js server
// The app responds for requests to the root URL (/) or route.
// For every other path, it will respond with a 404 Not Found.
let PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log("Server successfully started on port: " + PORT);
});
