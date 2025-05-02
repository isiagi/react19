import React from "react";

type Props = {};

async function ServerComponent({}: Props) {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  console.log(await data.json());

  return <div>page</div>;
}

export default ServerComponent;
