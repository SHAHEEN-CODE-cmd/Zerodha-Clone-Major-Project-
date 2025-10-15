// 
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel.js");
const { PositionsModel } = require("./model/PositionsModel.js");
const { OrdersModel } = require("./model/OrdersModel.js");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());

  app.get('/', (req, res) => {
  res.send('Zerodha Clone Backend is running');
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  console.log("Received body:", req.body);

  if (!req.body || !req.body.name) {
    return res.status(400).send("Missing required fields");
  }



  try {
    const newOrder = new OrdersModel(req.body);
    await newOrder.save();
    res.status(201).send("Order placed successfully");
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).send("Internal server error");
  }
});

//  Connect to MongoDB first, then start server
mongoose
  .connect(uri)
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(PORT, '0.0.0.0', () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection failed:", err);
  });
