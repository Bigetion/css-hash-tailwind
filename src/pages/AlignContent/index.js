import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function AlignContent() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Align Content</h1>
      </div>
      <PanelSection title="Start">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`grid grid-cols-3 gap-4 content-start w-full rounded-lg ${stripes.purple} text-center h-56`}
          >
            <div className="p-4 shadow-lg rounded-lg bg-purple-500">01</div>
            <div className="p-4 shadow-lg rounded-lg bg-purple-500">02</div>
            <div className="p-4 shadow-lg rounded-lg bg-purple-500">03</div>
            <div className="p-4 shadow-lg rounded-lg bg-purple-500">04</div>
            <div className="p-4 shadow-lg rounded-lg bg-purple-500">05</div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Center">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`grid grid-cols-3 gap-4 content-center w-full rounded-lg ${stripes.sky} text-center h-56`}
          >
            <div className="p-4 shadow-lg rounded-lg bg-sky-500">01</div>
            <div className="p-4 shadow-lg rounded-lg bg-sky-500">02</div>
            <div className="p-4 shadow-lg rounded-lg bg-sky-500">03</div>
            <div className="p-4 shadow-lg rounded-lg bg-sky-500">04</div>
            <div className="p-4 shadow-lg rounded-lg bg-sky-500">05</div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="End">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`grid grid-cols-3 gap-4 content-end w-full rounded-lg ${stripes.pink} text-center h-56`}
          >
            <div className="p-4 shadow-lg rounded-lg bg-pink-500">01</div>
            <div className="p-4 shadow-lg rounded-lg bg-pink-500">02</div>
            <div className="p-4 shadow-lg rounded-lg bg-pink-500">03</div>
            <div className="p-4 shadow-lg rounded-lg bg-pink-500">04</div>
            <div className="p-4 shadow-lg rounded-lg bg-pink-500">05</div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Space Between">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`grid grid-cols-3 gap-4 content-between w-full rounded-lg ${stripes.violet} text-center h-56`}
          >
            <div className="p-4 shadow-lg rounded-lg bg-violet-500">01</div>
            <div className="p-4 shadow-lg rounded-lg bg-violet-500">02</div>
            <div className="p-4 shadow-lg rounded-lg bg-violet-500">03</div>
            <div className="p-4 shadow-lg rounded-lg bg-violet-500">04</div>
            <div className="p-4 shadow-lg rounded-lg bg-violet-500">05</div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Space Around">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`grid grid-cols-3 gap-x-4 content-around w-full rounded-lg ${stripes.blue} text-center h-56`}
          >
            <div className="p-4 shadow-lg rounded-lg bg-blue-500">01</div>
            <div className="p-4 shadow-lg rounded-lg bg-blue-500">02</div>
            <div className="p-4 shadow-lg rounded-lg bg-blue-500">03</div>
            <div className="p-4 shadow-lg rounded-lg bg-blue-500">04</div>
            <div className="p-4 shadow-lg rounded-lg bg-blue-500">05</div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
