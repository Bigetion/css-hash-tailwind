import React from "react";

import PanelSection from "components/PanelSection";

export default function SpaceBetween() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Space Between</h1>
      </div>
      <PanelSection title="Add horizontal space between children">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex space-x-4 bg-gray-200">
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2">
              1
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2">
              2
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add vertical space between children">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="space-y-6 bg-gray-200">
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2">
              1
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2">
              2
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Reversing children order">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex flex-row-reverse space-x-4 space-x-reverse bg-gray-200">
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2">
              1
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2">
              2
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
