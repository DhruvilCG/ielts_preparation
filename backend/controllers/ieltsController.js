const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = "mongodb+srv://dhruvilpatelm:dhruvil2207@cluster0.4xcyi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "IELTS";

let db, Reading, Listening, Writing, Speaking, Answers;  // Add Answers collection

// Function to connect to MongoDB
async function connectToDB() {
    if (!db) {
        try {
            const client = await MongoClient.connect(uri);
            console.log("✅ Connected to MongoDB");
            db = client.db(dbName);

            // Define collections
            Reading = db.collection("IELTS reading");
            Listening = db.collection("IELTS listening");
            Writing = db.collection("IELTS writing");
            Speaking = db.collection("IELTS speaking");
            Answers = db.collection("user_answers");  // New collection for user answers
        } catch (err) {
            console.error("❌ MongoDB Connection Error:", err);
            process.exit(1);  // Terminate the app if DB connection fails
        }
    }
}

// Fetch Random Reading
const getReading = async (req, res) => {
    try {
        await connectToDB();  // Ensure DB is connected
        const randomReading = await Reading.aggregate([{ $sample: { size: 1 } }]).toArray();
        if (randomReading.length === 0) {
            return res.status(404).json({ error: "Reading not found" });
        }
        res.status(200).json(randomReading[0]);
    } catch (err) {
        res.status(500).json({ error: "Error fetching reading", details: err.message });
    }
};

// Fetch Random Listening
const getListening = async (req, res) => {
    try {
        await connectToDB();  // Ensure DB is connected
        const randomListening = await Listening.aggregate([{ $sample: { size: 1 } }]).toArray();
        if (randomListening.length === 0) {
            return res.status(404).json({ error: "Listening not found" });
        }
        res.status(200).json(randomListening[0]);
    } catch (err) {
        res.status(500).json({ error: "Error fetching listening", details: err.message });
    }
};

// Fetch Random Writing
const getWriting = async (req, res) => {
    try {
        await connectToDB();  // Ensure DB is connected
        const randomWriting = await Writing.aggregate([{ $sample: { size: 1 } }]).toArray();
        if (randomWriting.length === 0) {
            return res.status(404).json({ error: "Writing not found" });
        }
        res.status(200).json(randomWriting[0]);
    } catch (err) {
        res.status(500).json({ error: "Error fetching writing", details: err.message });
    }
};

// Fetch Random Speaking
const getSpeaking = async (req, res) => {
    try {
        await connectToDB();  // Ensure DB is connected
        const randomSpeaking = await Speaking.aggregate([{ $sample: { size: 1 } }]).toArray();
        if (randomSpeaking.length === 0) {
            return res.status(404).json({ error: "Speaking not found" });
        }
        res.status(200).json(randomSpeaking[0]);
    } catch (err) {
        res.status(500).json({ error: "Error fetching speaking", details: err.message });
    }
};

// Add Reading Entry
const addReading = async (req, res) => {
    try {
        const { title, content } = req.body;  // Assuming `title` and `content` are required fields for Reading
        if (!title || !content) {
            return res.status(400).json({ error: "Title and content are required" });
        }

        await connectToDB();  // Ensure DB is connected
        const newReading = await Reading.insertOne(req.body);
        res.status(201).json({ message: "Reading added successfully", data: newReading });
    } catch (err) {
        res.status(500).json({ error: "Error adding reading", details: err.message });
    }
};

// Submit Answer (User Feedback)
const submitAnswer = async (req, res) => {
    try {
        const { questionId, answer, userId } = req.body;  // Assuming questionId, answer, and userId are provided by the user

        // Validate the data
        if (!questionId || !answer || !userId) {
            return res.status(400).json({ error: "Missing required fields: questionId, answer, and userId" });
        }

        await connectToDB();  // Ensure DB is connected

        // Insert the answer data into the `user_answers` collection
        const newAnswer = await Answers.insertOne({ questionId, answer, userId, submittedAt: new Date() });

        res.status(201).json({
            message: "Answer submitted successfully",
            data: newAnswer
        });
    } catch (err) {
        res.status(500).json({ error: "Error submitting answer", details: err.message });
    }
};

// Export controllers
module.exports = { 
    getReading, 
    getListening, 
    getWriting, 
    getSpeaking, 
    addReading, 
    submitAnswer  // Export the submitAnswer function
};
