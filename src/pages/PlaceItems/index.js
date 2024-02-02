import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function PlaceItems() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Place Items</h1>
      </div>
      <PanelSection title="Start">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div className="grid grid-cols-3 h-56 gap-4">
            <div
              className={`${stripes.cyan} grid place-items-start rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
                01
              </div>
            </div>
            <div
              className={`${stripes.cyan} grid place-items-start rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
                02
              </div>
            </div>
            <div
              className={`${stripes.cyan} grid place-items-start rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
                03
              </div>
            </div>
            <div
              className={`${stripes.cyan} grid place-items-start rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
                04
              </div>
            </div>
            <div
              className={`${stripes.cyan} grid place-items-start rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
                05
              </div>
            </div>
            <div
              className={`${stripes.cyan} grid place-items-start rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
                06
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="End">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div className="grid grid-cols-3 h-56 gap-4">
            <div
              className={`${stripes.violet} grid place-items-end rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
                01
              </div>
            </div>
            <div
              className={`${stripes.violet} grid place-items-end rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
                02
              </div>
            </div>
            <div
              className={`${stripes.violet} grid place-items-end rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
                03
              </div>
            </div>
            <div
              className={`${stripes.violet} grid place-items-end rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
                04
              </div>
            </div>
            <div
              className={`${stripes.violet} grid place-items-end rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
                05
              </div>
            </div>
            <div
              className={`${stripes.violet} grid place-items-end rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">
                06
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Center">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div className="grid grid-cols-3 h-56 gap-4">
            <div
              className={`${stripes.pink} grid place-items-center rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
                01
              </div>
            </div>
            <div
              className={`${stripes.pink} grid place-items-center rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
                02
              </div>
            </div>
            <div
              className={`${stripes.pink} grid place-items-center rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
                03
              </div>
            </div>
            <div
              className={`${stripes.pink} grid place-items-center rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
                04
              </div>
            </div>
            <div
              className={`${stripes.pink} grid place-items-center rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
                05
              </div>
            </div>
            <div
              className={`${stripes.pink} grid place-items-center rounded-lg`}
            >
              <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">
                06
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Stretch">
        <div className="font-mono text-white text-sm font-bold leading-6">
          <div className="grid grid-cols-3 gap-4 h-56 gap-4">
            <div
              className={`${stripes.blue} grid place-items-stretch rounded-lg`}
            >
              <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-blue-500">
                01
              </div>
            </div>
            <div
              className={`${stripes.blue} grid place-items-stretch rounded-lg`}
            >
              <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-blue-500">
                02
              </div>
            </div>
            <div
              className={`${stripes.blue} grid place-items-stretch rounded-lg`}
            >
              <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-blue-500">
                03
              </div>
            </div>
            <div
              className={`${stripes.blue} grid place-items-stretch rounded-lg`}
            >
              <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-blue-500">
                04
              </div>
            </div>
            <div
              className={`${stripes.blue} grid place-items-stretch rounded-lg`}
            >
              <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-blue-500">
                05
              </div>
            </div>
            <div
              className={`${stripes.blue} grid place-items-stretch rounded-lg`}
            >
              <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-blue-500">
                06
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
