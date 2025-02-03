const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = "mongodb+srv://dhruvilpatelm:dhruvil2207@cluster0.4xcyi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "IELTS";

let db, Reading, Listening, Writing, Speaking;

async function connectToDB() {
    if (!db) {
        try {
            const client = await MongoClient.connect(uri);
            console.log("✅ Connected to MongoDB");
            db = client.db(dbName);
            Reading = db.collection("IELTS reading");
            Listening = db.collection("IELTS listening");
            Writing = db.collection("IELTS writing");
            Speaking = db.collection("IELTS speaking");
        } catch (err) {
            console.error("❌ MongoDB Connection Error:", err);
            process.exit(1);
        }
    }
}

const getReading = async (req, res) => {
    try {
        await connectToDB();
        const totalEntries = await Reading.countDocuments();
        const randomNum = Math.floor(Math.random() * totalEntries) + 1;
        const randomReading = await Reading.findOne({ num: randomNum });

        if (randomReading) {
            res.status(200).json(randomReading);
        } else {
            res.status(404).json({ error: "Reading not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Error fetching reading", details: err.message });
    }
};

const getListening = async (req, res) => {
    try {
        await connectToDB();
        const totalEntries = await Listening.countDocuments();
        const randomNum = Math.floor(Math.random() * totalEntries) + 1;
        const randomListening = await Listening.findOne({ num: randomNum });

        if (randomListening) {
            res.status(200).json(randomListening);
        } else {
            res.status(404).json({ error: "Listening not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Error fetching listening", details: err.message });
    }
};

const getWriting = async (req, res) => {
    try {
        await connectToDB();
        const totalEntries = await Writing.countDocuments();
        const randomNum = Math.floor(Math.random() * totalEntries) + 1;
        const randomWriting = await Writing.findOne({ num: randomNum });

        if (randomWriting) {
            res.status(200).json(randomWriting);
        } else {
            res.status(404).json({ error: "Writing not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Error fetching writing", details: err.message });
    }
};

const getSpeaking = async (req, res) => {
    try {
        await connectToDB();
        const totalEntries = await Speaking.countDocuments();
        const randomNum = Math.floor(Math.random() * totalEntries) + 1;
        const randomSpeaking = await Speaking.findOne({ num: randomNum });

        if (randomSpeaking) {
            res.status(200).json(randomSpeaking);
        } else {
            res.status(404).json({ error: "Speaking not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Error fetching speaking", details: err.message });
    }
};

module.exports = { getReading, getListening, getWriting, getSpeaking };
