import React from "react";

import PanelSection from "components/PanelSection";

export default function TextColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Color</h1>
      </div>
      <PanelSection title="Usage">
        <div className="text-center p-4">
          <div className="text-purple-600 text-xl font-semibold truncate">
            The quick brown fox jumped over the lazy dog.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Hover">
        <div className="text-center p-4">
          <button className="border-2 border-blue-500 hover:border-red-500 bg-transparent text-blue-600 hover:text-red-600 py-2 px-4 font-semibold rounded">
            Button
          </button>
        </div>
      </PanelSection>
      <PanelSection title="Focus">
        <div className="">
          <div className="max-w-xs w-full mx-auto">
            <input
              className="border border-gray-400 focus:border-red-500 bg-white text-gray-900 appearance-none inline-block w-full focus:text-red-600 rounded py-3 px-4 focus:outline-none"
              placeholder="Focus me"
              value="Focus me"
            />
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
