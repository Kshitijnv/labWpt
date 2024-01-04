const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

// Sample data storage using arrays
let foods = [];

app.use(bodyParser.json());

// API to add new food
app.post("/new", (req, res) => {
  const { name, price } = req.body;
  const newFood = {
    id: foods.length + 1,
    name,
    price,
  };
  foods.push(newFood);
  res.status(201).json({ message: "Food added successfully", food: newFood });
});

// API to get all food list
app.get("/list", (req, res) => {
  res.status(200).json({ foods });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
