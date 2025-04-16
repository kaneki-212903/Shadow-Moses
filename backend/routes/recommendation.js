const router = require("express").Router();
const axios = require("axios");

// You can change this to an env variable if hosted separately
const RECOMMENDER_API = "http://localhost:8000";

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await axios.get(`${RECOMMENDER_API}/recommend/${userId}`);
    res.status(200).json(response.data);
  } catch (err) {
    console.error("❌ Recommendation Error:", err.message);
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
});

module.exports = router;
