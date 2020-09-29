import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundColor() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Background Color</h1>
      </div>
      <PanelSection title="Usage">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <button
            type="button"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded mr-2"
          >
            Button
          </button>
        </div>
      </PanelSection>
    </div>
  );
}
