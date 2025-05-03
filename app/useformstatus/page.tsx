/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

function Page() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const [data, action, isPending] = useActionState(
    async (currentState: any, formData: any) => {
      const data = await formData.get("name");
      await delay(3000);
      return data;
    },
    null
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        action={action}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Form with useFormStatus
        </h2>

        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Enter your name"
            disabled={isPending}
          />
        </div>

        {/* {isPending && <p>Loading...</p>} */}
        {/* <button type="submit">Submit</button> */}
        <Button />

        {data && (
          <div className="mt-6 p-4 bg-green-50 rounded-md border border-green-200">
            <p className="text-green-800">
              <span className="font-medium">Submitted:</span> {data}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
        pending
          ? "bg-gray-400 text-gray-200 cursor-not-allowed"
          : "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800"
      }`}
    >
      <div className="flex items-center justify-center">
        {pending && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {pending ? "Loading..." : "Submit"}
      </div>
    </button>
  );
}

export default Page;
