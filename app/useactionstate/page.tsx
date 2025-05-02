/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useActionState, useState } from "react";

type Props = {};

// function Page({}: Props) {
//   const [text, setText] = useState("");

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     console.log(text);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input onChange={(e) => setText(e.target.value)} type="text" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

function Page({}: Props) {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const [data, action, isPending] = useActionState(
    async (currentState, formData) => {
      const data = await formData.get("name");
      await delay(3000);
      return data;
    },
    null
  );

  return (
    <form action={action}>
      <input name="name" type="text" />
      {isPending && <p>Loading...</p>}
      <button type="submit">Submit</button>

      {data && <p>{data}</p>}
    </form>
  );
}

export default Page;
