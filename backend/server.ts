import express from "express";
import cors from "cors";
import { connectDB } from "./db.ts";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: [
      "https://varinsorlie.github.io",
      "http://localhost:5173"
    ],
  })
);
app.use(express.json());

async function startServer() {
  const db = await connectDB();
  const listsCollection = db.collection("lists");
  const travelTipsCollection = db.collection("travelTips");

  // GET all lists
  app.get("/lists", async (req, res) => {
    try {
      const lists = await listsCollection.find({}).toArray();
      res.json(lists);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch lists" });
    }
  });

  // GET list by slug
  app.get("/lists/:slug", async (req, res) => {
    try {
      const list = await listsCollection.findOne({ slug: req.params.slug });
      if (!list) return res.status(404).json({ error: "List not found" });
      res.json(list);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch list" });
    }
  });

  // GET all travel tips
  app.get("/traveltips", async (req, res) => {
    try {
      const tips = await travelTipsCollection.find({}).toArray();
      res.json(tips);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch travel tips" });
    }
  });

  // GET travel tip by slug
  app.get("/traveltips/:slug", async (req, res) => {
    try {
      const tip = await travelTipsCollection.findOne({ slug: req.params.slug });
      if (!tip) return res.status(404).json({ error: "Travel tip not found" });
      res.json(tip);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch travel tip" });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();