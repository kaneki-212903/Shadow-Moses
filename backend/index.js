const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const messageRoute = require("./routes/messages");
const connectionRoute = require("./routes/connections");
const recommendationRoute = require("./routes/recommendations");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// API Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/messages", messageRoute);
app.use("/api/connections", connectionRoute);
app.use("/api/recommendations", recommendationRoute);

// Root health check
app.get("/", (req, res) => {
  res.send("🚀 Shadow Moses backend running...");
});

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`🌐 Server running at http://localhost:${PORT}`);
});
