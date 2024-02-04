import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function MaxHeight() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Max Height</h1>
      </div>
      <PanelSection title="Setting the maximum height">
        <div className="h-96 flex justify-center items-end space-x-4 font-mono font-bold text-xs text-center text-white">
          <div
            className={`w-8 grid items-end ${stripes.blue} rounded-lg h-full`}
          >
            <div className="w-full bg-blue-500 rounded-lg shadow-lg h-full max-h-80 relative">
              <div className="absolute w-8 bottom-6">
                <div className="transform -rotate-90">max-h-80</div>
              </div>
            </div>
          </div>
          <div
            className={`w-8 grid items-end ${stripes.blue} rounded-lg h-full`}
          >
            <div className="w-full bg-blue-500 rounded-lg shadow-lg h-full max-h-64 relative">
              <div className="absolute w-8 bottom-6">
                <div className="transform -rotate-90">max-h-64</div>
              </div>
            </div>
          </div>
          <div
            className={`w-8 grid items-end ${stripes.blue} rounded-lg h-full`}
          >
            <div className="w-full bg-blue-500 rounded-lg shadow-lg h-full max-h-48 relative">
              <div className="absolute w-8 bottom-6">
                <div className="transform -rotate-90">max-h-48</div>
              </div>
            </div>
          </div>
          <div
            className={`w-8 grid items-end ${stripes.blue} rounded-lg h-full`}
          >
            <div className="w-full bg-blue-500 rounded-lg shadow-lg h-full max-h-40 relative">
              <div className="absolute w-8 bottom-6">
                <div className="transform -rotate-90">max-h-40</div>
              </div>
            </div>
          </div>
          <div
            className={`w-8 grid items-end ${stripes.blue} rounded-lg h-full`}
          >
            <div className="w-full bg-blue-500 rounded-lg shadow-lg h-full max-h-32 relative">
              <div className="absolute w-8 bottom-6">
                <div className="transform -rotate-90">max-h-32</div>
              </div>
            </div>
          </div>
          <div
            className={`w-8 grid items-end ${stripes.blue} rounded-lg h-full`}
          >
            <div className="w-full bg-blue-500 rounded-lg shadow-lg h-full max-h-24 relative">
              <div className="absolute w-8 bottom-6">
                <div className="transform -rotate-90">max-h-24</div>
              </div>
            </div>
          </div>
          <div
            className={`w-8 grid items-end ${stripes.blue} rounded-lg h-full`}
          >
            <div className="w-full bg-blue-500 rounded-lg shadow-lg h-full max-h-full relative">
              <div className="absolute w-8 bottom-6">
                <div className="transform -rotate-90">max-h-full</div>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
