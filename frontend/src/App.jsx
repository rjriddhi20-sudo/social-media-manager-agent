import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import Calendar from "./pages/Calendar";


function App() {
  const [view, setView] = useState("chat");
const [ativeChat, setActiveChat] = useState(null);

  return (
    <div className="h-screen flex bg-pink-100">

      {/* Sidebar */}
      <Sidebar
  setView={setView}
  setActiveChat={setActiveChat}
/>


      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="p-4">
          <h1 className="text-3xl font-bold text-pink-600">
            BLOOMELLA 🌸
          </h1>
          <p className="text-sm text-gray-600">
            AI-Powered Social Media Content Generator
          </p>
        </div>

        {/* View Switching */}
        {view === "chat" && <ChatWindow />}
        {view === "analytics" && <div className="p-10">Analytics Page Coming Soon</div>}
        {view === "calendar" && <Calendar />}

      </div>
    </div>
  );
}

export default App;
