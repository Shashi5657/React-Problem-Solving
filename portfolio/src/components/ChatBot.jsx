import React, { useState } from "react";

/**
 * ChatBot Component
 *
 * - A floating chat button that toggles a chat widget.
 * - Keeps track of user and bot messages in local state.
 * - Sends a hardcoded (dummy) response to the user for demonstration.
 * - Customize it or integrate with an AI/chat API as desired.
 */
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  // Simulate a "bot" response
  const getBotResponse = (userMessage) => {
    // Simple placeholder logic or integrate your real backend/AI
    if (userMessage.toLowerCase().includes("hello")) {
      return "Hi there! How can I help you?";
    } else if (userMessage.toLowerCase().includes("help")) {
      return "Sure! What do you need help with?";
    } else {
      return "I'm just a demo bot. Customize me with real logic or an AI API!";
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user's message to the chat
    const userMsg = { sender: "user", text: inputValue.trim() };
    setMessages((prev) => [...prev, userMsg]);

    // Clear input
    setInputValue("");

    // Generate bot response
    const botMsg = { sender: "bot", text: getBotResponse(inputValue.trim()) };
    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg]);
    }, 600); // artificial delay to mimic real typing
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 bg-cyan-500 text-white p-4 rounded-full shadow-xl hover:bg-cyan-400 transition transform hover:-translate-y-1 z-50"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* Close icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* Chat icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8h2a2 2 0 012 2v9a2 2 0 01-2 2h-2M7 8h2a2 2 0 012 2v9a2 2 0 01-2 2H7m10-12H7m10 4H7m0 4h5"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-8 w-80 bg-gray-900 text-white rounded-lg shadow-xl overflow-hidden flex flex-col z-50">
          {/* Header */}
          <div className="bg-cyan-500 text-gray-900 p-3 font-semibold flex items-center justify-between">
            <span>ChatBot</span>
            {/* Could place another close button here if you want */}
          </div>

          {/* Messages */}
          <div className="p-3 flex-1 overflow-auto max-h-64 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[70%] ${
                    msg.sender === "user"
                      ? "bg-cyan-500 text-gray-900"
                      : "bg-gray-700 text-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="flex border-t border-gray-700"
          >
            <input
              type="text"
              className="w-full p-2 bg-gray-800 text-white focus:outline-none"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-cyan-500 text-gray-900 px-4 py-2 hover:bg-cyan-400 transition"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
