import React from "react";

import PanelSection from "components/PanelSection";

export default function Width() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Width</h1>
      </div>
      <PanelSection title="Fixed widths">
        <div className="flex justify-center">
          <div className="space-y-4 font-mono font-bold text-xs text-center text-white">
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-96 hidden sm:block">
              w-96
            </div>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-80 hidden sm:block">
              w-80
            </div>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-64 hidden sm:block">
              w-64
            </div>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-48">
              w-48
            </div>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-40">
              w-40
            </div>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-32">
              w-32
            </div>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-24">
              w-24
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Percentage widths">
        <div className="space-y-4 font-mono font-bold text-xs text-white">
          <div className="flex space-x-4">
            <div className="w-1/2 px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-1/2
            </div>
            <div className="w-1/2 px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-1/2
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-2/5 px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-2/5
            </div>
            <div className="w-3/5 px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-3/5
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/3 px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-1/3
            </div>
            <div className="w-2/3 px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-2/3
            </div>
          </div>
          <div className="space-x-4 hidden sm:flex">
            <div className="w-1/4 px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-1/4
            </div>
            <div className="w-3/4 px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-3/4
            </div>
          </div>
          <div className="space-x-4 hidden sm:flex">
            <div className="w-1/5 px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-1/5
            </div>
            <div className="w-4/5 px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-4/5
            </div>
          </div>
          <div className="space-x-4 hidden sm:flex">
            <div className="w-1/6 px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-1/6
            </div>
            <div className="w-5/6 px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-5/6
            </div>
          </div>
          <div className="w-full px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center text-white font-mono">
            w-full
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
