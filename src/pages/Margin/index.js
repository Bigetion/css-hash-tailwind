import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function Margin() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Margin</h1>
      </div>

      <PanelSection title="Add margin to a single side" paddingless>
        <div className="relative font-mono text-white text-sm font-bold leading-6 h-56">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 md:-ml-24">
            <div className={`flow-root ${stripes.purple} rounded-b-lg`}>
              <div className="bg-purple-500 rounded-lg shadow-lg p-4 mt-6">
                mt-6
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className={`flow-root ${stripes.purple} rounded-l-lg`}>
              <div className="flex-none bg-purple-500 rounded-lg shadow-lg p-4 mr-4">
                mr-4
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:ml-24">
            <div className={`flow-root ${stripes.purple} rounded-t-lg`}>
              <div className="bg-purple-500 rounded-lg shadow-lg p-4 mb-8">
                mb-8
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <div className={`flow-root ${stripes.purple} rounded-r-lg`}>
              <div className="flex-none bg-purple-500 rounded-lg shadow-lg p-4 ml-2">
                ml-2
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add horizontal margin">
        <div className="flex justify-center font-mono text-white text-sm font-bold leading-6">
          <div className={`${stripes.indigo} rounded-lg`}>
            <div className="bg-indigo-500 rounded-lg shadow-lg p-4 mx-8">
              mx-8
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add vertical margin">
        <div className="flex justify-center font-mono text-white text-sm font-bold leading-6">
          <div className={`flow-root ${stripes.pink} rounded-lg`}>
            <div className="bg-pink-500 rounded-lg shadow-lg p-4 my-8">
              my-8
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add margin to a all sides">
        <div className="flex justify-center font-mono text-white text-sm font-bold leading-6">
          <div className={`flow-root ${stripes.blue} rounded-lg`}>
            <div className="bg-blue-500 rounded-lg shadow-lg p-4 m-8">m-8</div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Using negative values">
        <div className="flex justify-center font-mono text-white text-sm font-bold leading-6">
          <div className="flex flex-col items-center">
            <div className="relative w-36 h-16 bg-sky-400 bg-opacity-20 border border-sky-700 border-opacity-10 rounded-md overflow-hidden" />
            <div className="relative -mt-8 bg-sky-500 rounded-md flex items-center justify-center p-4 shadow-lg">
              -mt-8
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Using logical properties">
        <div className="grid grid-cols-2 gap-x-4 place-items-center">
          <div className="flex flex-col items-start gap-y-4" dir="ltr">
            <p className="text-sm font-medium">Left-to-right</p>
            <div
              className={`${stripes.indigo} rounded-lg font-mono text-white text-sm font-bold leading-6`}
            >
              <div className="bg-indigo-500 rounded-lg shadow-lg p-4 ms-8">
                ms-8
              </div>
            </div>
            <div
              className={`mt-4 ${stripes.indigo} rounded-lg font-mono text-white text-sm font-bold leading-6`}
            >
              <div className="bg-indigo-500 rounded-lg shadow-lg p-4 me-8">
                me-8
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-4" dir="rtl">
            <p className="text-sm font-medium">Right-to-left</p>
            <div
              className={`${stripes.indigo} rounded-lg font-mono text-white text-sm font-bold leading-6`}
            >
              <div className="bg-indigo-500 rounded-lg shadow-lg p-4 ms-8">
                ms-8
              </div>
            </div>
            <div
              className={`mt-4 ${stripes.indigo} rounded-lg font-mono text-white text-sm font-bold leading-6`}
            >
              <div className="bg-indigo-500 rounded-lg shadow-lg p-4 me-8">
                me-8
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
