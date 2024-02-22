import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function JustifySelf() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Justify Self</h1>
      </div>
      <PanelSection title="Auto">
        <div className="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr font-mono text-white text-sm font-bold leading-6 text-center">
          <div className="p-4 rounded-lg bg-purple-300">01</div>
          <div className="justify-self-auto p-4 rounded-lg bg-purple-500 shadow-lg">
            02
          </div>
          <div className="p-4 rounded-lg bg-purple-300">03</div>
          <div className="p-4 rounded-lg bg-purple-300">04</div>
          <div className="p-4 rounded-lg bg-purple-300">05</div>
          <div className="p-4 rounded-lg bg-purple-300">06</div>
        </div>
      </PanelSection>
      <PanelSection title="Start">
        <div className="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr font-mono text-white text-sm font-bold leading-6 text-center">
          <div className="p-4 rounded-lg bg-pink-300">01</div>
          <div className={`${stripes.pink} rounded-lg`}>
            <div className="justify-self-start p-4 w-14 h-14 rounded-lg bg-pink-500 shadow-lg">
              02
            </div>
          </div>
          <div className="p-4 rounded-lg bg-pink-300">03</div>
          <div className="p-4 rounded-lg bg-pink-300">04</div>
          <div className="p-4 rounded-lg bg-pink-300">05</div>
          <div className="p-4 rounded-lg bg-pink-300">06</div>
        </div>
      </PanelSection>
      <PanelSection title="Center">
        <div className="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr font-mono text-white text-sm font-bold leading-6 text-center">
          <div className="p-4 rounded-lg bg-indigo-300">01</div>
          <div
            className={`${stripes.indigo} justify-self-center grid w-full rounded-lg`}
          >
            <div className="justify-self-center p-4 w-14 h-14 rounded-lg bg-indigo-500 shadow-lg">
              02
            </div>
          </div>
          <div className="p-4 rounded-lg bg-indigo-300">03</div>
          <div className="p-4 rounded-lg bg-indigo-300">04</div>
          <div className="p-4 rounded-lg bg-indigo-300">05</div>
          <div className="p-4 rounded-lg bg-indigo-300">06</div>
        </div>
      </PanelSection>
      <PanelSection title="End">
        <div className="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr font-mono text-white text-sm font-bold leading-6 text-center">
          <div className="p-4 rounded-lg bg-blue-300">01</div>
          <div
            className={`${stripes.blue} justify-self-end grid w-full rounded-lg`}
          >
            <div className="justify-self-end p-4 w-14 h-14 rounded-lg bg-blue-500 shadow-lg">
              02
            </div>
          </div>
          <div className="p-4 rounded-lg bg-blue-300">03</div>
          <div className="p-4 rounded-lg bg-blue-300">04</div>
          <div className="p-4 rounded-lg bg-blue-300">05</div>
          <div className="p-4 rounded-lg bg-blue-300">06</div>
        </div>
      </PanelSection>
      <PanelSection title="Stretch">
        <div className="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr font-mono text-white text-sm font-bold leading-6 text-center">
          <div className={`${stripes.fuchsia} rounded-lg`}>
            <div className="p-4 w-14 h-14 rounded-lg bg-fuchsia-300">01</div>
          </div>
          <div
            className={`${stripes.fuchsia} justify-self-stretch grid w-full rounded-lg`}
          >
            <div className="justify-self-stretch p-4 rounded-lg bg-fuchsia-500 shadow-lg">
              02
            </div>
          </div>
          <div className={`${stripes.fuchsia} rounded-lg`}>
            <div className="p-4 w-14 h-14 rounded-lg bg-fuchsia-300">03</div>
          </div>
          <div className={`${stripes.fuchsia} rounded-lg`}>
            <div className="p-4 w-14 h-14 rounded-lg bg-fuchsia-300">04</div>
          </div>
          <div className={`${stripes.fuchsia} rounded-lg`}>
            <div className="p-4 w-14 h-14 rounded-lg bg-fuchsia-300">05</div>
          </div>
          <div className={`${stripes.fuchsia} rounded-lg`}>
            <div className="p-4 w-14 h-14 rounded-lg bg-fuchsia-300">06</div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
