"use client";

import React, { useOptimistic, useState } from "react";

function Page() {
  // Initialize with objects that have text and status properties
  const initialMessages = [
    { text: "Learn Coding", status: "complete" },
    { text: "Dance", status: "complete" },
    { text: "Play Score", status: "complete" },
    { text: "Sing", status: "complete" },
  ];
  const [messages, setMessages] = useState(initialMessages);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (currentMessages, newMessageData) => {
      return [
        ...currentMessages,
        { text: newMessageData.text, status: newMessageData.status },
      ];
    }
  );

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function addMessage(formData) {
    const messageText = formData.get("message");
    if (!messageText) return;

    // Add the optimistic update with "sending" status
    addOptimisticMessage({ text: messageText, status: "sending" });

    // Simulate a network delay
    await delay(2000);

    // Actually update the base state after the "server operation"
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: messageText, status: "complete" },
    ]);
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        {optimisticMessages.map((item, index) => (
          <div
            key={index}
            className="p-2 mb-2 bg-gray-100 rounded flex items-center"
          >
            <h1 className="flex-grow">{item.text}</h1>
            {item.status === "sending" && (
              <span className="text-sm text-blue-500 ml-2">Sending...</span>
            )}
          </div>
        ))}
      </div>
      <form action={addMessage} className="flex">
        <input
          name="message"
          type="text"
          className="border p-2 mr-2 flex-grow"
          placeholder="Type a message"
        />
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Add Message
        </button>
      </form>
    </div>
  );
}

export default Page;
