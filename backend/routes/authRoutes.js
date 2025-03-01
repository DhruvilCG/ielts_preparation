const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User"); // Ensure the correct path to your User model

const router = express.Router();

// ✅ SIGNUP ROUTE
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("🔥 Signup Error:", error); // Print error in console
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ✅ SIGNIN ROUTE
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    res.status(200).json({ message: "Login successful!", user });
  } catch (error) {
    console.error("🔥 Signin Error:", error); // Print error in console
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
