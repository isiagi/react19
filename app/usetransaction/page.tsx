"use client";

import React, { useState, useTransition } from "react";

type Props = {};

function Page({}: Props) {
  const [count, setCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleCount = async () => {
    setLoading(true);
    setCount(count + 1);
    await delay(3000);
    setUserCount(count);
    setLoading(false);
  };
  return (
    <div className="mt-5 flex flex-col">
      <button className="p-4 bg-gray-200" onClick={handleCount}>
        {"Increment"}
      </button>
      {loading && <p>Loading...</p>}

      {userCount && <p>{userCount}</p>}
    </div>
  );
}

// function Page({}: Props) {
//   const [count, setCount] = useState(0);
//   const [userCount, setUserCount] = useState(0);
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
//       // Update userCount after count has been updated

//       setUserCount(count);
//     });
//   };

//   return (
//     <div className="mt-5 flex flex-col">
//       <button className="p-4 bg-gray-200" onClick={handleCount}>
//         Increment
//       </button>
//       {pending && <p>Loading...</p>}
//       {/* Make sure userCount is displayed even when it's 0 */}
//       <p>Count: {count}</p>
//       <p>User Count: {userCount}</p>
//     </div>
//   );
// }

export default Page;
