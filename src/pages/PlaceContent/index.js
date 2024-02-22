import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function PlaceContent() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Place Content</h1>
      </div>
      <PanelSection title="Center">
        <div
          className={`font-mono text-white text-sm font-bold leading-6 ${stripes.sky} rounded-lg`}
        >
          <div
            className="grid place-content-center h-56 gap-4"
            style={{ gridTemplateColumns: "repeat(2, 56px)" }}
          >
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
              01
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
              02
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
              03
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
              04
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Start">
        <div
          className={`font-mono text-white text-sm font-bold leading-6 ${stripes.fuchsia} rounded-lg`}
        >
          <div
            className="grid place-content-start h-56 gap-4"
            style={{ gridTemplateColumns: "repeat(2, 56px)" }}
          >
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">
              01
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">
              02
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">
              03
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">
              04
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="End">
        <div
          class={`font-mono text-white text-sm font-bold leading-6 ${stripes.indigo} rounded-lg`}
        >
          <div
            className="grid place-content-end h-56 gap-4"
            style={{ gridTemplateColumns: "repeat(2, 56px)" }}
          >
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">
              01
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">
              02
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">
              03
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">
              04
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Space Between">
        <div
          className={`font-mono text-white text-sm font-bold leading-6 ${stripes.purple} rounded-lg`}
        >
          <div
            className="grid place-content-between h-56 gap-4"
            style={{ gridTemplateColumns: "repeat(2, 56px)" }}
          >
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-purple-500">
              01
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-purple-500">
              02
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-purple-500">
              03
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-purple-500">
              04
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Space Around">
        <div
          className={`font-mono text-white text-sm font-bold leading-6 ${stripes.cyan} rounded-lg`}
        >
          <div
            className="grid place-content-around h-56 gap-x-4"
            style={{ gridTemplateColumns: "repeat(2, 56px)" }}
          >
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
              01
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
              02
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
              03
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
              04
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Space Evenly">
        <div
          className={`font-mono text-white text-sm font-bold leading-6 ${stripes.violet} rounded-lg`}
        >
          <div
            className="grid place-content-evenly h-56"
            style={{ gridTemplateColumns: "repeat(2, 56px)" }}
          >
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
              01
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
              02
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
              03
            </div>
            <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
              04
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Stretch">
        <div
          className={`font-mono text-white text-sm font-bold leading-6 ${stripes.pink} rounded-lg`}
        >
          <div className="grid grid-cols-2 place-content-stretch h-56 gap-4">
            <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
              01
            </div>
            <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
              02
            </div>
            <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
              03
            </div>
            <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
              04
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
