import express from "express";
import { generateCopy } from "../controllers/copyController.js";

const router = express.Router();

router.post("/generate", generateCopy);

export default router;
