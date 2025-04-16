const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  desc: { type: String, max: 500 },
  img: { type: String },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", PostSchema);
