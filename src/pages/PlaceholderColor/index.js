import React from "react";

import PanelSection from "components/PanelSection";

export default function PlaceholderColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Placeholder Color</h1>
      </div>
      <PanelSection title="Usage">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-6">
          <div className="max-w-xs">
            <input
              className="block appearance-none placeholder-gray-500 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="jane@example.com"
            />
            <input
              className="mt-4 block appearance-none placeholder-red-300 border border-red-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="jane@example.com"
            />
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
