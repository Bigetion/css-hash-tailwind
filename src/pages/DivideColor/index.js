import React from "react";

import PanelSection from "components/PanelSection";

export default function DivideColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Divide Color</h1>
      </div>
      <PanelSection title="Usage">
        <div className="">
          <div className="divide-y divide-blue-300">
            <div className="text-center py-2">1</div>
            <div className="text-center py-2">2</div>
            <div className="text-center py-2">3</div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
