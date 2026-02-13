const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");

// GET /api/analytics
router.get("/", async (req, res) => {
  try {
    const totalChats = await Chat.countDocuments();

    const platformStats = await Chat.aggregate([
      { $group: { _id: "$platform", count: { $sum: 1 } } }
    ]);

    const toneStats = await Chat.aggregate([
      { $group: { _id: "$tone", count: { $sum: 1 } } }
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalChats,
        platformStats,
        toneStats
      }
    });

  } catch (error) {
    console.error("Analytics error:", error);
    res.status(500).json({
      success: false,
      message: "Analytics failed"
    });
  }
});

module.exports = router;
