import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

function ChatPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default ChatPage;
