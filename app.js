const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./auth-route");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5501");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/auth", authRoutes);

mongoose
  .connect(
    "mongodb+srv://pappicandy:perrywhite@cluster0.dygkkmg.mongodb.net/?retryWrites=true&w=majority",
    { socketTimeoutMS: 45000, maxPoolSize: 10 }
  )
  .then(() => {
    console.log("connected");
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
