"use client";

import React, { useState, useTransition } from "react";

function Page() {
  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(false);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleCount = async () => {
    setLoading(true);

    await delay(3000);
    setCount((prev) => prev + 1);

    setLoading(false);
  };
  return (
    <div className="mt-5 flex flex-col items-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Counter with useState
      </h1>
      <button
        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors w-full mb-4"
        onClick={handleCount}
      >
        {"Increment"}
      </button>

      {loading && (
        <p className="text-blue-500 animate-pulse font-medium mt-2">
          Loading...
        </p>
      )}

      <div className="flex justify-between w-full mt-4">
        <p className="text-lg font-medium">Current Count:{count}</p>
      </div>
    </div>
  );
}

// function Page() {
//   const [count, setCount] = useState(0);

//   const [pending, startTransition] = useTransition();

//   const delay = (ms: number) =>
//     new Promise((resolve) => setTimeout(resolve, ms));

//   const handleCount = () => {
//     // First perform the async operation outside of startTransition

//     // Then use startTransition for the state updates
//     startTransition(async () => {
//       // Use functional updates to avoid closure issues
//       setCount((prevCount) => prevCount + 1);
//       await delay(3000);
//     });
//   };

//   return (
//     <div className="mt-5 flex flex-col items-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800">
//         Counter with useTransition
//       </h1>
//       <button
//         className="p-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors w-full mb-4"
//         onClick={handleCount}
//       >
//         {"Increment"}
//       </button>

//       {pending && (
//         <p className="text-purple-500 animate-pulse font-medium mt-2">
//           Loading...
//         </p>
//       )}

//       <div className="flex justify-between w-full mt-4">
//         <p className="text-lg font-medium">User Count:{count && count}</p>
//       </div>
//     </div>
//   );
// }

export default Page;
