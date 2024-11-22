require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes.js");
const categoryRoutes = require("./routes/category.routes.js")
const cors = require('cors')

//middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


 app.use("/api/user", userRoutes );
 app.use("/api/category", categoryRoutes );

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB"); 
  })
  .catch((err) => console.log("Error"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server is running on port 3000"); 
});
