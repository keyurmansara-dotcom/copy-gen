import mongoose from "mongoose";

const copySchema = mongoose.Schema(
  {
    prompt: { type: String, required: true },
    result: { type: String, required: true }
  },
  { timestamps: true }
);

const Copy = mongoose.model("Copy", copySchema);

export default Copy;
