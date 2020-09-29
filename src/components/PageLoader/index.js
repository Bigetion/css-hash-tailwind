import React from "react";

export default function PageLoader() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Loading content...</h1>
      </div>
      <p>Please wait</p>
    </div>
  );
}
