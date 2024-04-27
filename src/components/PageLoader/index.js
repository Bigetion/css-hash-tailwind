import React from "react";
import Shimmer from "../Shimmer";

export default function PageLoader() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="w-full flex flex-col">
        <Shimmer>
          <Shimmer.Item className="w-72 h-9 rounded mb-5" />
          <Shimmer.Item className="w-96 h-6 rounded mb-2" />
          <Shimmer.Item className="w-full h-48 rounded mb-5" />
          <Shimmer.Item className="w-96 h-6 rounded mb-2" />
          <Shimmer.Item className="w-full h-56 rounded mb-5" />
        </Shimmer>
      </div>
    </div>
  );
}
