import { useEffect, useState } from "react";

function Sidebar({ setView, setActiveChat }) {
  const [chats, setChats] = useState([]);
  const [search, setSearch] = useState("");

  // 🔹 Load chats on mount
  useEffect(() => {
    fetch("http://localhost:5000/api/chat")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setChats(data.data);
        }
      })
      .catch(err => console.log("Sidebar fetch error:", err));
  }, []);

  // 🔹 Load selected chat
  const loadChat = (id) => {
    fetch(`http://localhost:5000/api/chat/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setActiveChat(data.data);
          setView("chat");
        }
      })
      .catch(err => console.log("Load chat error:", err));
  };

  // 🔹 Create new chat
  const handleNewChat = () => {
    setActiveChat(null);
    setView("chat");
  };

  return (
    <div className="w-64 bg-pink-200 p-4 flex flex-col h-full">

      {/* 🌸 New Chat Button */}
      <button
        onClick={handleNewChat}
        className="bg-pink-500 text-white rounded-lg py-2 mb-4 hover:bg-pink-600"
      >
        + New Chat
      </button>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search chats..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-lg p-2 mb-4"
      />

      {/* 📜 Chat History */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {chats
          .filter(chat =>
            chat.title.toLowerCase().includes(search.toLowerCase())
          )
          .map(chat => (
            <div
              key={chat._id}
              onClick={() => loadChat(chat._id)}
              className="cursor-pointer bg-white rounded-lg p-2 hover:bg-pink-100 text-sm shadow-sm"
            >
              {chat.title}
            </div>
          ))}
      </div>

      {/* 📊 Bottom Buttons */}
      <div className="mt-4 space-y-2">
        <button
          onClick={() => setView("analytics")}
          className="w-full bg-white rounded-lg py-2 hover:bg-pink-100"
        >
          📊 Analytics
        </button>

        <button
          onClick={() => setView("calendar")}
          className="w-full bg-white rounded-lg py-2 hover:bg-pink-100"
        >
          📅 Calendar
        </button>
      </div>

    </div>
  );
}

export default Sidebar;
