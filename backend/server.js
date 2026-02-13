require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const connectDB = require("./config/db");

const chatRoutes = require("./routes/chat");
const analyticsRoutes = require("./routes/analytics");
const calendarRoutes = require("./routes/calendar");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/chat", chatRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/calendar", calendarRoutes);



app.get("/", (req, res) => {
  res.send("BLOOMELLA AI Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
