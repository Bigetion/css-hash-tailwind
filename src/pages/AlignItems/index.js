import React from "react";

import PanelSection from "components/PanelSection";

export default function AlignItems() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Align Items</h1>
      </div>
      <PanelSection title="Baseline">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex items-baseline bg-gray-200 h-24">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 text-base">
              1
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 text-2xl">
              2
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 text-lg">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Start">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex items-start bg-gray-200 h-24">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              2
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Center">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex items-center bg-gray-200 h-24">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              2
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="End">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex items-end bg-gray-200 h-24">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              2
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Stretch">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex items-stretch bg-gray-200 h-24">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              2
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
