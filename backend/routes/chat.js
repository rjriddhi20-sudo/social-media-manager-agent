const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");
const { generateMockResponse } = require("../services/aiService");

router.post("/", async (req, res) => {
  try {
    const { message, platform, niche, tone, chatId } = req.body;

    let chat;

    if (chatId) {
      chat = await Chat.findById(chatId);
    }

    if (!chat) {
      chat = new Chat({
        title: message.slice(0, 30),
        messages: []
      });
    }

    chat.messages.push({ role: "user", content: message });

    const aiReply = generateMockResponse({
      message,
      platform,
      niche,
      tone
    });

    chat.messages.push({ role: "assistant", content: aiReply });

    await chat.save();

    res.json({
      success: true,
      data: chat
    });

  } catch (error) {
    console.log("Chat route error:", error);
    res.status(500).json({
      success: false,
      message: "Chat failed"
    });
  }
});

module.exports = router;
