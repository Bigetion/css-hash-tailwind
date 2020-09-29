import React from "react";

import PanelSection from "components/PanelSection";

export default function BorderRadius() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Border Radius</h1>
      </div>
      <PanelSection title="Rounded corners">
        <div className="rounded-lg overflow-hidden border border-gray-400 flex justify-around text-sm p-4">
          <div className="bg-gray-400 mr-3 p-4 rounded-sm">.rounded-sm</div>
          <div className="bg-gray-400 mr-3 p-4 rounded">.rounded</div>
          <div className="bg-gray-400 mr-3 p-4 rounded-md">.rounded-md</div>
          <div className="bg-gray-400 p-4 rounded-lg">.rounded-lg</div>
        </div>
      </PanelSection>
      <PanelSection title="Pills and circles">
        <div className="rounded-lg overflow-hidden border border-gray-400 flex items-center justify-around text-sm p-4">
          <div className="bg-gray-400 mr-3 py-2 px-4 rounded-full">
            Pill shape
          </div>
          <div className="bg-gray-400 h-16 w-16 rounded-full inline-flex items-center justify-center">
            Center
          </div>
        </div>
      </PanelSection>
      <PanelSection title="No rounding">
        <div className="rounded-lg overflow-hidden border border-gray-400 flex justify-around text-sm p-4 py-8">
          <div className="p-4 rounded-none bg-gray-400">.rounded-none</div>
        </div>
      </PanelSection>
      <PanelSection title="Rounding sides separately">
        <div className="rounded-lg overflow-hidden border border-gray-400 flex justify-around text-sm p-4">
          <div className="bg-gray-400 mr-3 p-4 rounded-t-lg">.rounded-t-lg</div>
          <div className="bg-gray-400 mr-3 p-4 rounded-r-lg">.rounded-r-lg</div>
          <div className="bg-gray-400 mr-3 p-4 rounded-b-lg">.rounded-b-lg</div>
          <div className="bg-gray-400 p-4 rounded-l-lg">.rounded-l-lg</div>
        </div>
      </PanelSection>
      <PanelSection title="Rounding corners separately">
        <div className="rounded-lg overflow-hidden border border-gray-400 flex justify-around text-sm p-4">
          <div className="bg-gray-400 mr-3 p-4 rounded-tl-lg">
            .rounded-tl-lg
          </div>
          <div className="bg-gray-400 mr-3 p-4 rounded-tr-lg">
            .rounded-tr-lg
          </div>
          <div className="bg-gray-400 mr-3 p-4 rounded-br-lg">
            .rounded-br-lg
          </div>
          <div className="bg-gray-400 p-4 rounded-bl-lg">.rounded-bl-lg</div>
        </div>
      </PanelSection>
    </div>
  );
}
