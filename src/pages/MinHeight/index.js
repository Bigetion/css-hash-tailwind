import React from "react";

import PanelSection from "components/PanelSection";

export default function MinHeight() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Min Height</h1>
      </div>
      <PanelSection title="Setting the minimum height">
        <div className="flex justify-center items-end gap-3 sm:gap-4 font-mono font-bold text-xs text-center text-white whitespace-nowrap h-96">
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg min-h-80 relative">
            <div className="absolute w-8 bottom-6">
              <div className="transform -rotate-90">min-h-80</div>
            </div>
          </div>
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg min-h-64 relative">
            <div className="absolute w-8 bottom-6">
              <div className="transform -rotate-90">min-h-64</div>
            </div>
          </div>
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg min-h-48 relative">
            <div className="absolute w-8 bottom-6">
              <div className="transform -rotate-90">min-h-48</div>
            </div>
          </div>
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg min-h-40 relative">
            <div className="absolute w-8 bottom-6">
              <div className="transform -rotate-90">min-h-40</div>
            </div>
          </div>
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg min-h-32 relative">
            <div className="absolute w-8 bottom-6">
              <div className="transform -rotate-90">min-h-32</div>
            </div>
          </div>
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg min-h-24 relative">
            <div className="absolute w-8 bottom-6">
              <div className="transform -rotate-90">min-h-24</div>
            </div>
          </div>
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg min-h-full h-96 relative">
            <div className="absolute w-8 bottom-6">
              <div className="transform -rotate-90">min-h-full</div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
