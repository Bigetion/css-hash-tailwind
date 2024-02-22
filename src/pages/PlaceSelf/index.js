import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function PlaceSelf() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Place Self</h1>
      </div>
      <PanelSection title="Auto">
        <div className="grid grid-cols-3 gap-4 place-iems-stretch font-mono text-white text-sm font-bold leading-6">
          <div className="p-8 rounded-lg flex items-center justify-center bg-indigo-300">
            01
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg palce-self-auto">
            02
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-indigo-300">
            03
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-indigo-300">
            04
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-indigo-300">
            05
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-indigo-300">
            06
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Start">
        <div className="grid grid-cols-3 gap-4 place-iems-stretch font-mono text-white text-sm font-bold leading-6">
          <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">
            01
          </div>
          <div className={`${stripes.purple} rounded-lg grid`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg place-self-start">
              02
            </div>
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">
            03
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">
            04
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">
            05
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">
            06
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Center">
        <div className="grid grid-cols-3 gap-4 place-iems-stretch font-mono text-white text-sm font-bold leading-6">
          <div className="p-8 rounded-lg flex items-center justify-center bg-sky-300">
            01
          </div>
          <div className={`${stripes.sky} rounded-lg grid`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg place-self-center">
              02
            </div>
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-sky-300">
            03
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-sky-300">
            04
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-sky-300">
            05
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-sky-300">
            06
          </div>
        </div>
      </PanelSection>
      <PanelSection title="End">
        <div className="grid grid-cols-3 gap-4 place-iems-stretch font-mono text-white text-sm font-bold leading-6">
          <div className="p-8 rounded-lg flex items-center justify-center bg-pink-300">
            01
          </div>
          <div className={`${stripes.pink} rounded-lg grid`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg place-self-end">
              02
            </div>
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-pink-300">
            03
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-pink-300">
            04
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-pink-300">
            05
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-pink-300">
            06
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Stretch">
        <div className="grid grid-cols-3 gap-4 place-iems-stretch font-mono text-white text-sm font-bold leading-6">
          <div className="p-8 rounded-lg flex items-center justify-center bg-fuchsia-300">
            01
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg place-self-stretch">
            02
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-fuchsia-300">
            03
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-fuchsia-300">
            04
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-fuchsia-300">
            05
          </div>
          <div className="p-8 rounded-lg flex items-center justify-center bg-fuchsia-300">
            06
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
