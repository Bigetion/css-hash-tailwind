import React from "react";

import PanelSection from "components/PanelSection";

export default function MinHeight() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Min Height</h1>
      </div>
      <PanelSection title="Usage">
        <div className="">
          <div className="h-48 p-6 bg-gray-300">
            <div className="h-24 min-h-full p-6 bg-gray-400 flex items-center justify-center">
              <span>min-h-full</span>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
