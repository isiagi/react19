import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-900 mb-12 border-b-4 border-indigo-600 pb-4">
          Other React 19 Features
        </h1>

        <div className="bg-white rounded-xl shadow-xl p-8 space-y-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="group hover:bg-indigo-50 p-4 rounded-lg transition-all duration-300 ease-in-out"
            >
              <h3 className="text-xl font-bold text-indigo-800 group-hover:text-indigo-600 flex items-center">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-800 mr-3 group-hover:bg-indigo-200">
                  {index + 1}
                </span>
                {feature}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/watch?v=AJOGzVygGcY&t=237s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Learn more about React 19
          </a>
        </div>
      </div>
    </div>
  );
}

// Extract features to an array for mapping
const featuresList = [
  "Use the USE api with context",
  "Server Actions",
  "No need for forwardRef",
  "Include Meta data directly in the component",
  "Directly adding stylesheets in component",
  "Preload Api",
];

export default page;
