const express = require("express");
const routes = express.Router();
let products = [];
routes.post("/products/product", (req, resp) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return resp.status(400).json({ error: "Name and price are required." });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  resp.status(201).json(newProduct);
});

routes.get("/products", (req, resp) => {
  resp.json(products);
});

module.exports = routes;
