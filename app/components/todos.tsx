"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { use } from "react";

// function Todos({ todosList }: any) {
//   return (
//     <div className="grid gap-4">
//       {todosList.map((todo: any) => (
//         <div
//           key={todo.id}
//           className="bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow"
//         >
//           <div className="flex items-center">
//             <div
//               className={`mr-3 h-5 w-5 rounded-full ${
//                 todo.completed ? "bg-green-500" : "bg-amber-500"
//               }`}
//             ></div>
//             <p className="text-gray-700">{todo.title}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

function Todos({ todosPromise }: any) {
  const todosList: any = use(todosPromise);
  return (
    <div className="grid gap-4">
      {todosList.map((todo: any) => (
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
  );
}

export default Todos;
