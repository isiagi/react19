/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useActionState, useState } from "react";

type Props = {};

function Page({}: Props) {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submittedText, setSubmittedText] = useState("");

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await delay(3000);

    setSubmittedText(text);
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Standard Form
      </h2>
      <div className="mb-4">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text..."
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        className={`w-full text-white p-3 rounded-md transition-colors ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Submit"}
      </button>

      {isLoading && (
        <div className="mt-4 flex items-center justify-center">
          <p className="text-blue-500 animate-pulse">Loading...</p>
        </div>
      )}

      {submittedText && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
          <p className="font-medium">
            Submitted: <span className="text-blue-600">{submittedText}</span>
          </p>
        </div>
      )}
    </form>
  );
}

// function Page({}: Props) {
//   const delay = (ms: number) =>
//     new Promise((resolve) => setTimeout(resolve, ms));

//   const [data, action, isPending] = useActionState(
//     async (currentState, formData) => {
//       const data = await formData.get("name");
//       await delay(3000);

//       // console.log(currentState);

//       return data;
//     },
//     null
//   );

//   return (
//     <form
//       action={action}
//       className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
//     >
//       <h2 className="text-xl font-semibold mb-4 text-gray-800">
//         Action State Form
//       </h2>
//       <div className="mb-4">
//         <input
//           name="name"
//           type="text"
//           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter your name..."
//           disabled={isPending}
//         />
//       </div>

//       <button
//         type="submit"
//         // formAction={action}
//         className={`w-full text-white p-3 rounded-md transition-colors ${
//           isPending
//             ? "bg-gray-400 cursor-not-allowed"
//             : "bg-green-500 hover:bg-green-600"
//         }`}
//         disabled={isPending}
//       >
//         {isPending ? "Processing..." : "Submit"}
//       </button>

//       {isPending && (
//         <div className="mt-4 flex items-center justify-center">
//           <p className="text-blue-500 animate-pulse">Loading...</p>
//         </div>
//       )}

//       {data && (
//         <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
//           <p className="font-medium">
//             Submitted: <span className="text-green-600">{data}</span>
//           </p>
//         </div>
//       )}
//     </form>
//   );
// }

export default Page;
