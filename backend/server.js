    
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // To load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json()); // To parse incoming JSON data

// MongoDB Connection using environment variable
mongoose.connect("mongodb+srv://dhruvilpatelm:dhruvil2207@cluster0.a26w3.mongodb.net/IELTS?retryWrites=true&w=majority&appName=Cluster0", {})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Error:", err));


// Import Routes
const feedbackRoutes = require("./routes/feedbackRoutes");
const userRoutes = require("./routes/userRoutes");

// Use Routes
app.use("/api", feedbackRoutes);  // Feedback route
app.use("/api", userRoutes);      // User route

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
