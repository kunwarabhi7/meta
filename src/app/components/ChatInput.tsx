"use client";

import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import Message from "../../../typing";
type Props = {};

const ChatInput = (props: Props) => {
  const [input, setInput] = useState("");

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    const chatMessage = input;
    setInput("");
   
    const id = uuid();

    const message: Message = {
      id,
      mesaage: chatMessage,
      created_at: Date.now(),
      username: "Abhishek",
      profile_pic:
        "https://pbs.twimg.com/profile_images/1634229831000027136/SGHVSziK_400x400.jpg",
      email: "iamdevabhi@mail.com",
    };

    const uploadMessageToUpstash = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/addMessage", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message
          }),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error occurred while uploading message:", error);
      }
    };

    uploadMessageToUpstash()
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="sticky bottom-0 z-50 flex w-full px-7 py-5 space-x-2 border-t border-gray-100"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="flex-1  rounded border border-gray-300 focus:ring-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        disabled={!input}
        type="submit"
        className="text-white bg-blue-500 hover:bg-blue-700 font-bold  p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
