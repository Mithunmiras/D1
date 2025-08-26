import { useState, useEffect, useRef } from "react";
import { BaseUrl } from "../config";
import { AiOutlineClose } from "react-icons/ai";

export default function ChatBot({ onClose }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Load saved messages
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages on change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch(`${BaseUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-12 bg-white shadow-lg 
        w-[95%] max-w-sm h-[70vh] sm:w-80 sm:h-96 flex flex-col rounded-lg
        transition-all duration-300 ease-in-out
        ${
          isClosing || isAnimating
            ? "opacity-0 translate-y-4 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      style={{ transformOrigin: "bottom right" }}
    >
      {/* Header */}
      <div className="bg-[#2563EB] text-white p-3 flex justify-between items-center rounded-t-lg">
        <span className="font-semibold">AI Chat</span>
        <button onClick={onClose}>
          <AiOutlineClose size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-[80%] break-words ${
              msg.sender === "user"
                ? "bg-[#2563EB] text-white self-end ml-auto"
                : "bg-gray-300 text-black self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="p-3 flex gap-2">
        <input
          type="text"
          className="border p-2 flex-1 rounded text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <button
          className="bg-[#2563EB] text-white px-4 py-2 rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
