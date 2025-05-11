import React, { useState } from "react";

const ChatPage = () => {
  // Dummy messages for testing purposes
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
    { sender: "user", text: "What's the latest news about AI?" },
    {
      sender: "bot",
      text: "AI is making great progress. Researchers are continuously developing new models and applications across various industries.",
    },
    { sender: "user", text: "Tell me more about AI in healthcare." },
    {
      sender: "bot",
      text: "AI in healthcare is revolutionizing patient care, from diagnostics to personalized treatment plans, powered by deep learning models.",
    },
  ]);

  const [userMessage, setUserMessage] = useState("");

  // Add user message and bot response (dummy data)
  const sendMessage = () => {
    if (userMessage.trim() === "") return;

    // Add user message
    setMessages([...messages, { sender: "user", text: userMessage }]);
    setUserMessage(""); // Clear the input

    // Dummy bot response (can be replaced with actual logic later)
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: "bot",
        text: "Here's a quick response to your query. I'll elaborate more in a moment.",
      },
    ]);
  };

  // Reset the chat session
  const resetSession = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow-xl space-y-6">
        <div className="h-80 overflow-y-scroll space-y-4 p-4 bg-gray-50 rounded-lg">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-4 rounded-lg max-w-xs ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message"
          />
          <button
            onClick={sendMessage}
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </div>

        <button
          onClick={resetSession}
          className="mt-4 w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        >
          Reset Session
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
