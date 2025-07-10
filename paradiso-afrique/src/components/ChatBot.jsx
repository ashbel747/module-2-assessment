import { useState } from "react";
import React from "react";
import { FaRegCommentDots } from "react-icons/fa6";
const ChatBot = () => {
  const [chatbotOpen, setChatbotOpen] = React.useState(false);
  return (
    <div>
      {/* Chatbot Button */}
      <button className="fixed bottom-6 right-6 bg-transparent p-4 z-50 hover:scale-105 flex gap-2" onClick={() => setChatbotOpen(!chatbotOpen)}>
        <FaRegCommentDots  />Chat with our bot
      </button>

      {chatbotOpen && (
      <div className="fixed inset-0 z-50 bg-[url('assets/chatbot-section-background.jpeg')] bg-cover bg-left bg-no-repeat  flex flex-col">
        <div className="px-4 py-3 flex justify-between items-center">
          <button className="bg-green-500 text-black px-4 py-2" onClick={() => setChatbotOpen(false)}>
            Back
          </button>
          <h2 className="text-3xl font-italianno text-center inline-block bg-white">Chat With Our Chef</h2>
          <div className="w-16"></div>
        </div>


        <div className="w-[400px] h-[90vh] bg-white rounded-lg shadow flex flex-col">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto bg-orange-100 p-4 space-y-6 scroll-smooth">
            <div className="text-center">
              <span className="font-italianno text-2xl text-black dark:text-white">Ask Chef Kofi</span>
            </div>

            {/* Bot message */}
            <div className="flex gap-3 items-start">
              <div className="text-3xl py-2">👨‍🍳</div>
              <div className="bg-white text-black rounded-[18px] px-3 py-2 max-w-[70%]">
                Hey there. How can I help you today?
              </div>
            </div>

            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-white text-black rounded-[18px] px-3 py-2 max-w-[70%]">
                What is your most popular dish?
              </div>
            </div>
          </div>

          {/* Suggested Prompts */}
          <div className="bg-white dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
            <ul className="space-y-3">
              <li className="bg-orange-100 dark:text-black px-4 py-2 rounded cursor-pointer hover:bg-orange-200">
                What is your most popular dish?
              </li>
              <li className="bg-orange-100 dark:text-black px-4 py-2 rounded cursor-pointer hover:bg-orange-200">
                How long does it take for food to be ready?
              </li>
              <li className="bg-orange-100 dark:text-black px-4 py-2 rounded cursor-pointer hover:bg-orange-200">
                Do you offer delivery services?
              </li>
            </ul>
          </div>

          {/* Input Bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <input
              type="text"
              placeholder="Write your message"
              className="flex-1 px-4 py-2 rounded border border-gray-300 focus:border-amber-600 outline-none bg-white dark:bg-gray-800 text-black dark:text-white"
            />
            <button className="w-10 h-10 bg-white text-black flex items-center justify-center rounded border border-gray-300">
              📤
            </button>
          </div>
        </div>
      </div>


    </div>
    )}

    </div>
  );
};

export default ChatBot;
