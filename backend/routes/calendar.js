const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");

// GET /api/calendar
router.get("/", async (req, res) => {
  try {
    const recentChats = await Chat.find()
      .sort({ createdAt: -1 })
      .limit(7);

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const calendar = days.map((day, index) => {
      return {
        day,
        content: recentChats[index]
          ? recentChats[index].userMessage
          : "No content planned",
        tip: "Engage with audience and post consistently"
      };
    });

    res.status(200).json({
      success: true,
      data: calendar
    });

  } catch (error) {
    console.error("Calendar error:", error);
    res.status(500).json({
      success: false,
      message: "Calendar generation failed"
    });
  }
});

module.exports = router;
