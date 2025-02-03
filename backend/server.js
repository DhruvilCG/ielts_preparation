const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allow JSON data parsing

// MongoDB Connection
mongoose.connect("mongodb+srv://dhruvilpatelm:dhruvil2207@cluster0.a26w3.mongodb.net/IELTS?retryWrites=true&w=majority", {})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Error:", err));


// Import Routes
const feedbackRoutes = require("./routes/feedbackRoutes");
const userRoutes = require("./routes/userRoutes");
const ieltsRoutes = require("./routes/ieltsRoutes");
const answerRoutes = require("./routes/answerRoutes");  // Import the new answer routes

// Use Routes
app.use("/api", feedbackRoutes);  // Feedback routes
app.use("/api", userRoutes);      // User routes
app.use("/api/ielts", ieltsRoutes); // IELTS-related routes
app.use("/api", answerRoutes); // Use the answer routes for POST /submit-answer

// Default Route (Health Check)
app.get("/", (req, res) => {
    res.send("🎉 IELTS API is running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));









// const express = require('express');
// const { MongoClient } = require('mongodb');
// const cors = require('cors');
// const app = express();
// const port = 5001;

// // MongoDB connection details
// // const uri = "mongodb://127.0.0.1:27017";
// const uri = "mongodb+srv://dhruvilpatelm:dhruvil2207@cluster0.4xcyi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const dbName = "IELTS";

// // Middleware
// app.use(express.json());
// app.use(cors());

// let db, Reading, Listening, Writing, Speaking; // Added subscriptions collection

// // Connect to MongoDB and initialize collections
// async function initializeDatabase() {
//   try {
//     const client = await MongoClient.connect(uri);
//     console.log("Connected to MongoDB");

//     db = client.db(dbName);
//     Reading = db.collection("IELTS reading");
//     Listening = db.collection("IELTS listening");
//     Writing = db.collection("IELTS writing");
//     Speaking = db.collection("IELTS speaking");

//     // Start server after successful DB connection
//     app.listen(port, () => {
//       console.log(`Server running at http://localhost:${port}`);
//     });
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//     process.exit(1);
//   }
// }

// // Initialize Database
// initializeDatabase();

// // Routes


// app.get('/reading', async (req, res) => {
//   try {
//     const randomNum = Math.floor(Math.random() * 2) + 1;

//     const randomReading = await Reading.findOne({ num: randomNum });

//     if (randomReading) {
//       res.status(200).json(randomReading);
//     } else {
//       res.status(404).send("Reading not found");
//     }
//   } catch (err) {
//     console.error("Error fetching reading:", err);
//     res.status(500).send("Error fetching reading: " + err.message);
//   }
// });


// app.get('/listening', async (req, res) => {
//   try {
//     const randomNum = Math.floor(Math.random() * 1) + 1;

//     const randomListening = await Listening.findOne({ num: randomNum });

//     if (randomListening) {
//       res.status(200).json(randomListening);
//     } else {
//       res.status(404).send("Listening not found");
//     }
//   } catch (err) {
//     console.error("Error fetching listening:", err);
//     res.status(500).send("Error fetching listening: " + err.message);
//   }
// });


// app.get('/writing', async (req, res) => {
//   try {
//     const randomNum = Math.floor(Math.random() * 10) + 1;

//     const randomWriting = await Writing.findOne({ num: randomNum });

//     if (randomWriting) {
//       res.status(200).json(randomWriting);
//     } else {
//       res.status(404).send("Writing not found");
//     }
//   } catch (err) {
//     console.error("Error fetching writing:", err);
//     res.status(500).send("Error fetching writing: " + err.message);
//   }
// });


// app.get('/speaking', async (req, res) => {
//   try {
//     const totalEntries = await Speaking.countDocuments(); // Get total count
//     const randomNum = Math.floor(Math.random() * totalEntries) + 1; // Pick random num

//     const randomSpeaking = await Speaking.findOne({ num: randomNum });

//     if (randomSpeaking) {
//       res.status(200).json(randomSpeaking);
//     } else {
//       res.status(404).send("Speaking entry not found");
//     }
//   } catch (err) {
//     console.error("Error fetching speaking:", err);
//     res.status(500).send("Error fetching speaking: " + err.message);
//   }
// });


// app.post('/users', async (req, res) => {
//   try {
//     const newUser = { ...req.body, joinedDate: new Date() };
//     const result = await users.insertOne(newUser);
//     res.status(201).send(`User added with ID: ${result.insertedId}`);
//   } catch (err) {
//     res.status(500).send("Error adding user: " + err.message);
//   }
// });

// app.patch('/users/:userId', async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const updates = req.body;
//     const result = await users.updateOne({ userId }, { $set: updates });
//     res.status(200).send(`${result.modifiedCount} document(s) updated`);
//   } catch (err) {
//     res.status(500).send("Error updating user: " + err.message);
//   }
// });

// app.delete('/users/:userId', async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const result = await users.deleteOne({ userId });
//     res.status(200).send(`${result.deletedCount} document(s) deleted`);
//   } catch (err) {
//     res.status(500).send("Error deleting user: " + err.message);
//   }
// });

// // VIDEOS ROUTES
// app.get('/videos', async (req, res) => {
//   try {
//     const allVideos = await videos.find().toArray();
//     res.status(200).json(allVideos);
//   } catch (err) {
//     res.status(500).send("Error fetching videos: " + err.message);
//   }
// });

// app.get('/videos/:videoId', async (req, res) => {
//   try {
//     const videoId = req.params.videoId;
//     const video = await videos.findOne({ videoId });
//     if (video) {
//       res.status(200).json(video);
//     } else {
//       res.status(404).send("Video not found");
//     }
//   } catch (err) {
//     res.status(500).send("Error fetching video: " + err.message);
//   }
// });

// app.post('/videos', async (req, res) => {
//   try {
//     const newVideo = { ...req.body, uploadDate: new Date() };
//     const result = await videos.insertOne(newVideo);
//     res.status(201).send(`Video added with ID: ${result.insertedId}`);
//   } catch (err) {
//     res.status(500).send("Error adding video: " + err.message);
//   }
// });

// app.patch('/videos/:videoId/likes', async (req, res) => {
//   try {
//     const videoId = req.params.videoId;
//     const updates = req.body;
//     const result = await videos.updateOne({ videoId }, { $set: updates });
//     res.status(200).send(`${result.modifiedCount} document(s) updated`);
//   } catch (err) {
//     res.status(500).send("Error updating video: " + err.message);
//   }
// });

// app.delete('/videos/:videoId', async (req, res) => {
//   try {
//     const videoId = req.params.videoId;
//     const result = await videos.deleteOne({ videoId });
//     res.status(200).send(`${result.deletedCount} document(s) deleted`);
//   } catch (err) {
//     res.status(500).send("Error deleting video: " + err.message);
//   }
// });

// // COMMENTS ROUTES
// app.get('/videos/:videoId/comments', async (req, res) => {
//   try {
//     const videoId = req.params.videoId;
//     const commentsForVideo = await comments.find({ videoId }).toArray();
//     if (commentsForVideo.length > 0) {
//       res.status(200).json(commentsForVideo);
//     } else {
//       res.status(404).send("No comments found for this video");
//     }
//   } catch (err) {
//     res.status(500).send("Error fetching comments: " + err.message);
//   }
// });

// app.post('/comments', async (req, res) => {
//   try {
//     const newComment = { ...req.body, commentDate: new Date() };
//     const result = await comments.insertOne(newComment);
//     res.status(201).send(`Comment added with ID: ${result.insertedId}`);
//   } catch (err) {
//     res.status(500).send("Error adding comment: " + err.message);
//   }
// });

// app.patch('/comments/:commentId/likes', async (req, res) => {
//   try {
//     const commentId = req.params.commentId;
//     const updates = req.body;
//     const result = await comments.updateOne({ commentId }, { $set: updates });
//     res.status(200).send(`${result.modifiedCount} document(s) updated`);
//   } catch (err) {
//     res.status(500).send("Error updating comment: " + err.message);
//   }
// });

// app.delete('/comments/:commentId', async (req, res) => {
//   try {
//     const commentId = req.params.commentId;
//     const result = await comments.deleteOne({ commentId });
//     res.status(200).send(`${result.deletedCount} document(s) deleted`);
//   } catch (err) {
//     res.status(500).send("Error deleting comment: " + err.message);
//   }
// });

// // PLAYLISTS ROUTES
// app.get('/playlists/:userId', async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const playlistsForUser = await playlists.find({ userId }).toArray();
//     if (playlistsForUser.length > 0) {
//       res.status(200).json(playlistsForUser);
//     } else {
//       res.status(404).send("No playlists found for this user");
//     }
//   } catch (err) {
//     res.status(500).send("Error fetching playlists: " + err.message);
//   }
// });

// app.post('/playlists', async (req, res) => {
//   try {
//     const newPlaylist = { ...req.body, playlistDate: new Date() };
//     const result = await playlists.insertOne(newPlaylist);
//     res.status(201).send(`Playlist added with ID: ${result.insertedId}`);
//   } catch (err) {
//     res.status(500).send("Error adding playlist: " + err.message);
//   }
// });

// app.put('/playlists/:playlistId/videos', async (req, res) => {
//   try {
//     const playlistId = req.params.playlistId;
//     const updates = req.body;
//     const result = await playlists.updateOne({ playlistId }, { $push: { videos: updates } });
//     res.status(200).send(`${result.modifiedCount} document(s) updated`);
//   } catch (err) {
//     res.status(500).send("Error updating playlist: " + err.message);
//   }
// });

// app.delete('/playlists/:playlistId', async (req, res) => {
//   try {
//     const playlistId = req.params.playlistId;
//     const result = await playlists.deleteOne({ playlistId });
//     res.status(200).send(`${result.deletedCount} document(s) deleted`);
//   } catch (err) {
//     res.status(500).send("Error deleting playlist: " + err.message);
//   }
// });

// // SUBSCRIPTIONS ROUTES
// app.get('/subscriptions/:subscriber', async (req, res) => {
//   try {
//     const subscriber = req.params.subscriber;
//     const subscriptionsForUser = await subscriptions.find({ subscriber }).toArray();
//     if (subscriptionsForUser.length > 0) {
//       res.status(200).json(subscriptionsForUser);
//     } else {
//       res.status(404).send("No subscriptions found for this user");
//     }
//   } catch (err) {
//     res.status(500).send("Error fetching subscriptions: " + err.message);
//   }
// });

// //Post request to add a new subscription
// app.post('/subscriptions', async (req, res) => {
//   try {
//     const newSubscription = { ...req.body, subscriptionDate: new Date() };
//     const result = await subscriptions.insertOne(newSubscription);
//     res.status(201).send(`Subscription added with ID: ${result.insertedId}`);
//   } catch (err) {
//     res.status(500).send("Error adding subscription: " + err.message);
//   }
// });
