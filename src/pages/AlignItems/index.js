import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function AlignItems() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Align Items</h1>
      </div>
      <PanelSection title="Stretch">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`flex items-stretch gap-4 w-full rounded-lg ${stripes.cyan} text-center`}
          >
            <div className="py-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
              01
            </div>
            <div className="py-12 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
              02
            </div>
            <div className="py-8 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
              03
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Start">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`flex items-start gap-4 w-full rounded-lg ${stripes.pink} text-center`}
          >
            <div className="py-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
              01
            </div>
            <div className="py-12 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
              02
            </div>
            <div className="py-8 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
              03
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Center">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`flex items-center gap-4 w-full rounded-lg ${stripes.violet} text-center`}
          >
            <div className="py-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
              01
            </div>
            <div className="py-12 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
              02
            </div>
            <div className="py-8 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
              03
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="End">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`flex items-end gap-4 w-full rounded-lg ${stripes.sky} text-center`}
          >
            <div className="py-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
              01
            </div>
            <div className="py-12 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
              02
            </div>
            <div className="py-8 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
              03
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Baseline">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`flex items-baseline gap-4 w-full rounded-lg ${stripes.blue} text-center`}
          >
            <div className="pt-2 pb-6 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-blue-500">
              01
            </div>
            <div className="pt-8 pb-12 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-blue-500">
              02
            </div>
            <div className="pt-12 pb-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-blue-500">
              03
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
