import React from "react";

import PanelSection from "components/PanelSection";

export default function GradientColorStops() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Gradient Color Stops</h1>
      </div>
      <PanelSection title="Starting Color">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-8">
          <div className="h-24 bg-gradient-to-r from-red-500"></div>
        </div>
      </PanelSection>
      <PanelSection title="Ending Color">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-8">
          <div className="h-24 bg-gradient-to-r from-teal-400 to-blue-500"></div>
        </div>
      </PanelSection>
      <PanelSection title="Middle Color">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-8">
          <div className="h-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
        </div>
      </PanelSection>
      <PanelSection title="Hover">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <button
            type="button"
            className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-4 py-2 rounded"
          >
            Hover me
          </button>
        </div>
      </PanelSection>
      <PanelSection title="Focus">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <button
            type="button"
            className="bg-gradient-to-r from-teal-400 to-blue-500 focus:from-pink-500 focus:to-orange-500 text-white font-semibold px-4 py-2 rounded"
          >
            Focus me
          </button>
        </div>
      </PanelSection>
    </div>
  );
}
