import React, { useState } from "react";
import { FaRegCommentDots, FaFaceSmile, FaUpload } from "react-icons/fa6";
import axios from "axios";

const ChatBot = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

const handleSend = async () => {
  if (!input.trim()) return;

  const newUserMessage = { type: "human", content: input };
  setMessages((prev) => [...prev, newUserMessage]);
  setInput("");
  setLoading(true);
try {
  const response = await axios.post("https://module-assessment-1.onrender.com/chat", {
    message: input,
  });

  console.log("Raw response from backend:", response.data);

  const raw = response.data;
  const botReply =
    typeof raw === "string"
      ? raw
      : raw.response || raw.reply || "I couldn't understand your message.";

  const botMessage = { type: "ai", content: botReply };
  setMessages((prev) => [...prev, botMessage]);
  } catch (err) {
    console.error("Error:", err);
    const errorMsg = {
      type: "ai",
      content: "Sorry, I had trouble responding. Please try again.",
    };
    setMessages((prev) => [...prev, errorMsg]);
  } finally {
    setLoading(false);
  }
};




  return (
    <div>
      {/* Chatbot Button */}
      <button
        className="fixed bottom-6 right-6 bg-transparent p-4 z-50 hover:scale-105 flex gap-2"
        onClick={() => setChatbotOpen(!chatbotOpen)}
      >
        <FaRegCommentDots /> Chat with our bot
      </button>

      {chatbotOpen && (
        <div className="fixed inset-0 z-50 bg-[url('assets/chatbot-section-background.jpeg')] bg-cover bg-top bg-no-repeat flex flex-col overflow-y-auto">
          <div className="px-4 py-3 flex justify-between items-center">
            <button
              className="bg-green-500 dark:bg-green-800 text-black px-4 py-2"
              onClick={() => setChatbotOpen(false)}
            >
              Back
            </button>
            <h2 className="text-3xl font-italianno text-center inline-block bg-white dark:bg-gray-900 dark:text-white p-2">
              Chat With Our Chef
            </h2>
            <div className="w-16"></div>
          </div>
          {/* Messages */}
          <div className="max-w-sm bg-white dark:bg-gray-800 flex flex-col ml-2 rounded mt-6">
            <span className="font-italianno text-2xl text-black dark:text-white text-center p-3">
              Ask Chef Kofi
            </span>
            <div className="flex-1 min-h-20 overflow-y-auto bg-orange-100 p-4 space-y-6 scroll-smooth">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === "ai" ? "gap-3 items-start" : "justify-end"}`}
                >
                  {msg.type === "ai" && (
                    <div className="text-3xl py-2">
                      🤖
                    </div>
                  )}
                  <div className="bg-white dark:bg-gray-800 dark:text-white text-black rounded-[18px] px-3 py-2 max-w-[70%]">
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && <div className="text-gray-600 italic">Chef Kofi is typing...</div>}
            </div>

            {/* Input Area */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded">
              <input
                type="text"
                placeholder="Write your message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-4 py-2 rounded border-white focus:border-amber-600 outline-none bg-white dark:bg-gray-800 text-black dark:text-white"
              />
              <button className="w-10 h-10 flex items-center justify-center" onClick={handleSend}>
                <FaFaceSmile className="bg-white text-black" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded">
                <FaUpload className="bg-white text-black" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

