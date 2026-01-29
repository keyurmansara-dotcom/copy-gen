import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import copyRoutes from "./routes/copyRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/copy", copyRoutes);

app.get("/", (req, res) => {
  res.send("✅ CopyGen Backend Running");
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
