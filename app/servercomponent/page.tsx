/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";

async function ServerComponent() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  await delay(6000);

  const todos = await data.json();
  console.log(todos);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-indigo-900 mb-8">
        Server Component
      </h1>

      <div className="grid gap-4">
        {todos.map((todo: any) => (
          <div
            key={todo.id}
            className="bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center">
              <div
                className={`mr-3 h-5 w-5 rounded-full ${
                  todo.completed ? "bg-green-500" : "bg-amber-500"
                }`}
              ></div>
              <p className="text-gray-700">{todo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-indigo-900 mb-8">
        Server Component
      </h1>

      <div className="flex items-center justify-center py-10">
        <div className="animate-spin h-10 w-10 border-4 border-indigo-500 rounded-full border-t-transparent"></div>
        <p className="ml-4 text-xl text-indigo-700">Loading todos...</p>
      </div>

      <div className="grid gap-4 mt-4">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-gray-300 animate-pulse"
          >
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServerComponentWrapper() {
  return (
    <Suspense fallback={<Loading />}>
      <ServerComponent />
    </Suspense>
  );
}
