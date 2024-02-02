import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function JustifyContent() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Justify Content</h1>
      </div>
      <PanelSection title="Start">
        <div
          className={`flex justify-start space-x-4 font-mono text-white text-sm font-bold leading-6 ${stripes.fuchsia} rounded-lg`}
        >
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            01
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            02
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            03
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Center">
        <div
          className={`flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 ${stripes.blue} rounded-lg`}
        >
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            01
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            02
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            03
          </div>
        </div>
      </PanelSection>
      <PanelSection title="End">
        <div
          className={`flex justify-end space-x-4 font-mono text-white text-sm font-bold leading-6 ${stripes.cyan} rounded-lg`}
        >
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
            01
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
            02
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
            03
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Space Between">
        <div
          className={`flex justify-between space-x-4 font-mono text-white text-sm font-bold leading-6 ${stripes.pink} rounded-lg`}
        >
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg">
            01
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg">
            02
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg">
            03
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Space Around">
        <div
          className={`flex justify-around space-x-4 font-mono text-white text-sm font-bold leading-6 ${stripes.purple} rounded-lg`}
        >
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg">
            01
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg">
            02
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg">
            03
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Space Evenly">
        <div
          className={`flex justify-evenly space-x-4 font-mono text-white text-sm font-bold leading-6 ${stripes.indigo} rounded-lg`}
        >
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">
            01
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">
            02
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">
            03
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Stretch">
        <div
          className={`grid grid-flow-col justify-stretch gap-4 font-mono text-white text-sm font-bold leading-6 ${stripes.fuchsia} rounded-lg`}
        >
          <div className="h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            01
          </div>
          <div className="h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            02
          </div>
          <div className="h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            03
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Normal">
        <div
          className={`flex justify-normal space-x-4 font-mono text-white text-sm font-bold leading-6 ${stripes.blue} rounded-lg`}
        >
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            01
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            02
          </div>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            03
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
