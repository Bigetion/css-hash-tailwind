import React from "react";

function ContentLoader() {
  return (
    <div className="mt-4">
      <h1 className="text-xl text-gray-700 mb-2">.....</h1>
      <div className="">
        <div className="space-y-6">
          <div className="text-gray-700 bg-gray-400 h-5 rounded-lg"></div>
          <div className="text-gray-700 bg-gray-400 h-5 rounded-lg"></div>
          <div className="text-gray-700 bg-gray-400 h-5 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
export default function PageLoader() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">..........</h1>
      </div>
      <ContentLoader />
      <ContentLoader />
    </div>
  );
}
