import React from "react";

function MessageBubble({ role, content }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: role === "user" ? "flex-end" : "flex-start",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          padding: "14px 18px",
          borderRadius: "18px",
          background:
            role === "user"
              ? "linear-gradient(135deg, #ffb6e6, #ffc2f0)"
              : "#ffffffcc",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 20px rgba(255, 105, 180, 0.15)",
          fontSize: "14px",
          whiteSpace: "pre-wrap",
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default MessageBubble;
