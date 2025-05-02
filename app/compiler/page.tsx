"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type Props = {};

function Page({}: Props) {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setCount(count + 1);
    console.log("handleClick");
  }, []);
  return (
    <>
      <h1>Compiler</h1>
      <ChildComponet onClick={handleClick} />
    </>
  );
}

const ChildComponet = React.memo(function ChildComponet({
  onClick,
}: {
  onClick: () => void;
}) {
  console.log("ChildComponet");
  return <button onClick={onClick}>Click</button>;
});

export default Page;
