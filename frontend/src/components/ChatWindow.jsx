import { useEffect, useState } from "react";
import MessageBubble from "./MessageBubble";
import TopControls from "./TopControls";

function ChatWindow({ activeChat }) {

  const [platform, setPlatform] = useState("instagram");
  const [niche, setNiche] = useState("");
  const [tone, setTone] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatId, setChatId] = useState(null);

  // 🔥 LOAD CHAT WHEN CLICKED FROM SIDEBAR
  useEffect(() => {
    if (activeChat) {
      setMessages(activeChat.messages);
      setChatId(activeChat._id);
    }
  }, [activeChat]);

  const handleSend = async () => {
    if (!input) return;

    const newMessage = { role: "user", content: input };
    setMessages(prev => [...prev, newMessage]);

    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: input,
        platform,
        niche,
        tone,
        chatId
      })
    });

    const data = await res.json();

    if (data.success) {
      setMessages(data.data.messages);
      setChatId(data.data._id);
    }

    setInput("");
  };

  return (
    <div className="flex-1 flex items-center justify-center p-10">
      <div className="pixel-frame">
        <div className="pixel-card w-[820px]">

          {/* Top Controls */}
          <TopControls
            platform={platform}
            setPlatform={setPlatform}
            niche={niche}
            setNiche={setNiche}
            tone={tone}
            setTone={setTone}
          />

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 flex flex-col">
            {messages.map((msg, index) => (
              <MessageBubble
                key={index}
                role={msg.role}
                content={msg.content}
              />
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-3 rounded-xl"
              placeholder="Tell me what you want to create..."
            />
            <button
              onClick={handleSend}
              className="bg-pink-500 text-white px-4 rounded-xl"
            >
              Generate
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
