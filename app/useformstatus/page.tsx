"use client";

import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

type Props = {};

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
      {/* {isPending && <p>Loading...</p>} */}
      {/* <button type="submit">Submit</button> */}
      <Button />

      {data && <p>{data}</p>}
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return <button>{pending ? "Loading..." : "Submit"}</button>;
}

export default Page;
