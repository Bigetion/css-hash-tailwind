import React from "react";

import PanelSection from "components/PanelSection";

export default function DivideOpacity() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Divide Opacity</h1>
      </div>
      <PanelSection title="Usage">
        <div className="rounded-lg overflow-hidden border border-gray-400 bg-checkered p-4">
          <div className="divide-y-4 divide-black divide-opacity-25">
            <div className="text-center py-2">1</div>
            <div className="text-center py-2">2</div>
            <div className="text-center py-2">3</div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
