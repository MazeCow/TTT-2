const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

/* The app is configured to use express.json */
app.use(express.json());

/* Using port 3000. */
const port = 3000;
const USER_DATA_JSON_PATH = "./json/user.json";
const PRODUCTS_JSON_PATH = "./json/products.json";

/* Root endpoint */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/* Set up static assets */
app.use(express.static(path.join(__dirname, "public")));

/* Users endpoint. */
app.get("/users", (req, res) => {
  const userData = JSON.parse(
    fs.readFileSync(path.join(__dirname, USER_DATA_JSON_PATH))
  );
  res.json(userData);
});

/* Products endpoint. */
app.get("/products", (req, res) => {
  const productData = JSON.parse(fs.readFileSync(PRODUCTS_JSON_PATH));
  res.json(productData);
});

app.post("/productData", (req, res) => {
  console.log(req.body);
});

/* Start server */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
