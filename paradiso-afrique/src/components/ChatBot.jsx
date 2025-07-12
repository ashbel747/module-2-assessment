import React from "react";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaFaceSmile } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa6";
const ChatBot = () => {
  const [chatbotOpen, setChatbotOpen] = React.useState(false);
  return (
    <div>
      {/* Chatbot Button */}
      <button className="fixed bottom-6 right-6 bg-transparent p-4 z-50 hover:scale-105 flex gap-2" onClick={() => setChatbotOpen(!chatbotOpen)}>
        <FaRegCommentDots  />Chat with our bot
      </button>

      {chatbotOpen && (
      <div className="fixed inset-0 z-50 bg-[url('assets/chatbot-section-background.jpeg')] bg-cover bg-top bg-no-repeat flex flex-col overflow-y-auto" id="chatbot">
        <div className="px-4 py-3 flex justify-between items-center">
          <button className="bg-green-500 dark:bg-green-800 text-black px-4 py-2" onClick={() => setChatbotOpen(false)}>
            Back
          </button>
          <h2 className="text-3xl font-italianno text-center inline-block bg-white dark:bg-gray-900 dark:text-white p-2">Chat With Our Chef</h2>
          <div className="w-16"></div>
        </div>

        {/*Chatbot Interface*/}
        <div className="max-w-sm bg-white dark:bg-gray-800 flex flex-col ml-2 rounded mt-6"><span className="font-italianno text-2xl text-black dark:text-white text-center p-3">Ask Chef Kofi</span>
          {/*Chatbot Messages*/}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 min-h-20 overflow-y-auto bg-orange-100 p-4 space-y-6 scroll-smooth">
        
              {/* Bot message */}
              <div className="flex gap-3 items-start">
                <div className="text-3xl py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M360-400h80v-200h-80v200Zm-160-60q-46-23-73-66.5T100-621q0-75 51.5-127T278-800q12 0 24.5 2t24.5 5q25-41 65-64t88-23q48 0 88 23t65 64q12-3 24-5t25-2q75 0 126.5 52T860-621q0 51-27 94.5T760-460v220H200v-220Zm320 60h80v-200h-80v200Zm-240 80h400v-189l44-22q26-13 41-36.5t15-52.5q0-42-28.5-71T682-720q-11 0-20 2t-19 5l-47 13-31-52q-14-23-36.5-35.5T480-800q-26 0-48.5 12.5T395-752l-31 52-48-13q-10-2-19.5-4.5T277-720q-41 0-69 29t-28 71q0 29 15 52.5t41 36.5l44 22v189Zm-80 80h80v80h400v-80h80v160H200v-160Zm280-80Z"/></svg>
                </div>
                <div className="bg-white dark:bg-gray-800 dark:text-white text-black rounded-[18px] px-3 py-2 max-w-[70%]">
                  Hey there. How can I help you today?
                </div>
              </div>

              {/* User messages */}
              <div className="flex justify-end">
                <div className="bg-white dark:bg-gray-800 dark:text-white text-black rounded-[18px] px-3 py-2 max-w-[70%]">
                  What is your most popular dish?
                </div>
              </div>

              {/*Typing Animation*/}
              <div><span className="animated-dots text-4xl font-bold text-black"></span></div>

            </div>
            

          {/* Input Place */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded">
            <input
              type="text"
              placeholder="Write your message"
              className="flex-1 px-4 py-2 rounded border-white focus:border-amber-600 outline-none bg-white dark:bg-gray-800 text-black dark:text-white"
            />
            <button className="w-10 h-10 flex items-center justify-center">
              <FaFaceSmile className="bg-white text-black" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded ">
              <FaUpload className="bg-white text-black"  />
            </button>
          </div>
        </div>

      </div>
      {/* Chatbot prompts */}
      <div className="px-3 mt-8">
        <ul className="space-y-4">
          <li className="bg-orange-100 dark:bg-gray-800 px-4 py-2 rounded w-96 cursor-pointer">
            What are your openning and closing hours?
          </li>
          <li className="bg-orange-100 dark:bg-gray-800 px-4 py-2 rounded w-96 cursor-pointer ">
            What are your menu recommendations?
          </li>
          <li className="bg-orange-100 dark:bg-gray-800 px-4 py-2 rounded w-96 cursor-pointer ">
            How can I make a reservation?
          </li>
          <li className="bg-orange-100 dark:bg-gray-800 px-4 py-2 rounded w-96 cursor-pointer ">
            What menu for dietary restrictions do you have?
          </li>
          <li className="bg-orange-100 dark:bg-gray-800 px-4 py-2 rounded w-96 cursor-pointer ">
            Where are you located?
          </li>
          <li className="bg-orange-100 dark:bg-gray-800 px-4 py-2 rounded w-96 cursor-pointer ">
            Do you have student discounts?
          </li>
        </ul>
      </div>

    </div>
    )}

    </div>
  );
};

export default ChatBot;