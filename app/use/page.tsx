import React from "react";
import Todos from "../components/todos";

async function ServerComponent() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  //   const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   await delay(6000);

  //   const todos = await data.json();
  //   console.log(todos);

  const dataUse = fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );
  await delay(6000);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-indigo-900 mb-8">
        Server Component
      </h1>

      {/* <Todos todosList={todos} /> */}
      <Todos todosPromise={dataUse} />
    </div>
  );
}

export default ServerComponent;
