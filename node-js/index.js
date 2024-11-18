const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/user.models.js")

app.use(express.json())
app.get("/", (req, res) => {
  res.send("well done pooja");
});

app.post("/api/addUser", async(req, res) => {
 try {
  const product = await Product.create(req.body);
  res.status(201).json(product);
 } catch (error) {
  res.status(500).json({message : error.message})
 }
})

app.get("/api/getUser", async(req, res) => {
  try {
   const product = await Product.find({});
   res.status(200).json(product);
  } catch (error) {
   res.status(500).json({message : error.message})
  }
 })

 app.get("/api/getUser/:id", async(req, res) => {
  try {
  const {id} = req.params;
   const product = await Product.findById(id);

   res.status(200).json(product);
  } catch (error) {
   res.status(500).json({message : error.message})
  }
 })

 app.put("/api/updateUser/:id", async(req, res) => {
  try {
  const {id} = req.params;
  const user = req.body

   res.status(200).json(product);
  } catch (error) {
   res.status(500).json({message : error.message})
  }
 })

mongoose
  .connect(
    "mongodb+srv://admin:E70zK2aT5wOfrlUP@cluster0.r875r.mongodb.net/ecommerce-api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB"); // successfully connected to MongoDB
  })
  .catch((err) => console.log("Error"));

app.listen(3000, () => {
  console.log("server is running on port 3000"); // server is listening on port 3000
});
