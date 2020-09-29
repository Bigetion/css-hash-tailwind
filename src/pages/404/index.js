import React from "react";

export default function NotFound() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">404</h1>
      </div>
      <div className="mt-4">
        <h1 className="text-xl text-gray-700">
          The page you requested was not found
        </h1>
      </div>
    </div>
  );
}
