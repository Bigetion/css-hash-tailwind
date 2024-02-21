import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundClip() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Background Clip</h1>
      </div>
      <PanelSection title="Usage">
        <div className="">
          <div className="flex justify-around">
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .bg-clip-border
              </p>
              <div className="mx-auto bg-purple-500 w-24 h-24 bg-clip-border border-4 border-dashed border-purple-800 p-4"></div>
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .bg-clip-padding
              </p>
              <div className="mx-auto bg-purple-500 w-24 h-24 bg-clip-padding border-4 border-dashed border-purple-800 p-4"></div>
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .bg-clip-content
              </p>
              <div className="mx-auto bg-purple-500 w-24 h-24 bg-clip-content border-4 border-dashed border-purple-800 p-4"></div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Cropping to text">
        <div className="p-8">
          <div className="text-center text-5xl font-extrabold leading-none tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Hello world
            </span>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
