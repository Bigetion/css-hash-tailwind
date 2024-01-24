import React from "react";

import PanelSection from "components/PanelSection";

export default function TransformOrigin() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Transform Origin</h1>
      </div>
      <PanelSection title="Usage">
        <div className="bg-white lg:flex justify-around items-center text-sm p-4 py-12">
          <div className="bg-gray-600">
            <img
              alt=""
              className="h-16 w-16 origin-center transform rotate-45"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
          <div className="bg-gray-600">
            <img
              alt=""
              className="h-16 w-16 origin-top-left transform rotate-45"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
          <div className="bg-gray-600">
            <img
              alt=""
              className="h-16 w-16 origin-bottom-right transform rotate-45"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
          <div className="bg-gray-600">
            <img
              alt=""
              className="h-16 w-16 origin-left transform rotate-45"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
