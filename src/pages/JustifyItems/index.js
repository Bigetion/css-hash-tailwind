import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function JustifyItems() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Justify Items</h1>
      </div>
      <PanelSection title="Start">
        <div className="grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6">
          <div className={`${stripes.sky} grid rounded-lg justify-items-start`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
              01
            </div>
          </div>
          <div className={`${stripes.sky} grid rounded-lg justify-items-start`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
              02
            </div>
          </div>
          <div className={`${stripes.sky} grid rounded-lg justify-items-start`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
              03
            </div>
          </div>
          <div className={`${stripes.sky} grid rounded-lg justify-items-start`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
              04
            </div>
          </div>
          <div className={`${stripes.sky} grid rounded-lg justify-items-start`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
              05
            </div>
          </div>
          <div className={`${stripes.sky} grid rounded-lg justify-items-start`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
              06
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="End">
        <div className="grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6">
          <div className={`${stripes.cyan} grid rounded-lg justify-items-end`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
              01
            </div>
          </div>
          <div className={`${stripes.cyan} grid rounded-lg justify-items-end`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
              02
            </div>
          </div>
          <div className={`${stripes.cyan} grid rounded-lg justify-items-end`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
              03
            </div>
          </div>
          <div className={`${stripes.cyan} grid rounded-lg justify-items-end`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
              04
            </div>
          </div>
          <div className={`${stripes.cyan} grid rounded-lg justify-items-end`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
              05
            </div>
          </div>
          <div className={`${stripes.cyan} grid rounded-lg justify-items-end`}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-cyan-500 shadow-lg">
              06
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Center">
        <div className="grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6">
          <div
            className={`${stripes.fuchsia} grid rounded-lg justify-items-center`}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
              01
            </div>
          </div>
          <div
            className={`${stripes.fuchsia} grid rounded-lg justify-items-center`}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
              02
            </div>
          </div>
          <div
            className={`${stripes.fuchsia} grid rounded-lg justify-items-center`}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
              03
            </div>
          </div>
          <div
            className={`${stripes.fuchsia} grid rounded-lg justify-items-center`}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
              04
            </div>
          </div>
          <div
            className={`${stripes.fuchsia} grid rounded-lg justify-items-center`}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
              05
            </div>
          </div>
          <div
            className={`${stripes.fuchsia} grid rounded-lg justify-items-center`}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
              06
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Stretch">
        <div className="grid grid-cols-3 gap-4 justify-items-stretch font-mono text-white text-sm font-bold leading-6">
          <div className="h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            01
          </div>
          <div className="h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            02
          </div>
          <div className="h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            03
          </div>
          <div className="h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            04
          </div>
          <div className="h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            05
          </div>
          <div className="h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            06
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
