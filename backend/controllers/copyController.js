import Copy from "../models/CopyModel.js";

export const generateCopy = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required" });
  }

  const result = `Generated marketing copy for: "${prompt}"`;

  const newCopy = await Copy.create({ prompt, result });

  res.status(200).json(newCopy);
};
