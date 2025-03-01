const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const feedbackRoutes = require("./routes/feedbackRoutes");
const ieltsRoutes = require("./routes/ieltsRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Ensure JSON body is parsed
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb+srv://dhruvilpatelm:dhruvil2207@cluster0.4xcyi.mongodb.net/IELTS?retryWrites=true&w=majority&appName=Cluster0", {})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// ✅ Routes
app.use("/api/feedback", feedbackRoutes);
app.use("/api/ielts", ieltsRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
