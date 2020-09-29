import React from "react";

import PanelSection from "components/PanelSection";

export default function DivideWidth() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Divide Width</h1>
      </div>
      <PanelSection title="Add borders between horizontal children">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="grid grid-cols-3 divide-x divide-gray-400">
            <div className="text-center">1</div>
            <div className="text-center">2</div>
            <div className="text-center">3</div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add borders between stacked children">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="divide-y divide-gray-400">
            <div className="text-center py-2">1</div>
            <div className="text-center py-2">2</div>
            <div className="text-center py-2">3</div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Reversing children order">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex flex-col-reverse divide-y divide-y-reverse divide-gray-400">
            <div className="text-center py-2">1</div>
            <div className="text-center py-2">2</div>
            <div className="text-center py-2">3</div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
