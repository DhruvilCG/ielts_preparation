const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create a new user
router.post("/users", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Input validation: ensure required fields are provided
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }

    const newUser = new User({ name, email, message });
    await newUser.save();
    res.status(201).json({ message: "User created successfully!", user: newUser });
  } catch (err) {
    console.error("Error creating user:", err.message);
    res.status(500).json({ error: "Error creating user" });
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Update a user by ID
router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Input validation: ensure required fields for update (if any) are present
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: "No data to update" });
    }

    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedUser) return res.status(404).json({ error: "User not found" });

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Error updating user:", err.message);
    res.status(500).json({ error: "Error updating user" });
  }
});

// Delete a user by ID
router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) return res.status(404).json({ error: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err.message);
    res.status(500).json({ error: "Error deleting user" });
  }
});

module.exports = router;
