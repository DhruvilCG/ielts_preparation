const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// ✅ SIGNUP ROUTE
router.post("/signup", async (req, res) => {
  try {
    console.log("📥 Incoming Signup Request:", req.body); // Debugging log

    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // ✅ Ensure all fields are present
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.log("❌ Missing Fields:", req.body);
      return res.status(400).json({ message: "All fields are required!" });
    }

    // ✅ Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match!" });
    }

    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create new user
    const newUser = new User({ firstName, lastName, email, password: hashedPassword });
    await newUser.save();

    console.log("✅ User Created Successfully:", newUser);
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("🔥 Signup Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ✅ SIGNIN ROUTE
router.post("/signin", async (req, res) => {
  try {
    console.log("📥 Incoming Signin Request:", req.body);

    const { email, password } = req.body;

    // ✅ Ensure email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required!" });
    }

    // ✅ Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    console.log("✅ Login Successful:", user.email);
    res.status(200).json({ message: "Login successful!", user });
  } catch (error) {
    console.error("🔥 Signin Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
