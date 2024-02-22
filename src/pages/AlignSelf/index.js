import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function AlignSelf() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Align Self</h1>
      </div>
      <PanelSection title="Auto">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`flex items-stretch gap-4 w-full rounded-lg ${stripes.sky} h-24`}
          >
            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-sky-300">
              01
            </div>
            <div className="self-auto p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
              02
            </div>
            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-sky-300">
              03
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Start">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`flex items-stretch gap-4 w-full rounded-lg ${stripes.pink} h-24`}
          >
            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-pink-300">
              01
            </div>
            <div className="self-start p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
              02
            </div>
            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-pink-300">
              03
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Center">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`flex items-stretch gap-4 w-full rounded-lg ${stripes.purple} h-24`}
          >
            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-purple-300">
              01
            </div>
            <div className="self-center p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-purple-500">
              02
            </div>
            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-purple-300">
              03
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="End">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`flex items-stretch gap-4 w-full rounded-lg ${stripes.indigo} h-24`}
          >
            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-indigo-300">
              01
            </div>
            <div className="self-end p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">
              02
            </div>
            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-indigo-300">
              03
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Stretch">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div
            className={`flex items-stretch gap-4 w-full rounded-lg ${stripes.fuchsia} h-24`}
          >
            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-fuchsia-300">
              01
            </div>
            <div className="self-stretch p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">
              02
            </div>
            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-fuchsia-300">
              03
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
