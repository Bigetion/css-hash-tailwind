import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function Padding() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Padding</h1>
      </div>
      <PanelSection title="Add padding to a single side">
        <div className="flex flex-wrap items-start justify-center font-mono text-white text-sm font-bold leading-6 -mx-5">
          <div className="flex items-start">
            <div className="flex-none px-5">
              <div className="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
                <div className={`h-6 rounded-t-lg ${stripes.white}`} />
                <div className="p-4">pt-6</div>
              </div>
            </div>
            <div className="flex-none px-5 pt-6">
              <div className="flex bg-purple-500 shadow-lg rounded-lg overflow-hidden">
                <div className="flex-none p-4">pr-4</div>
                <div className={`flex-none w-4 ${stripes.white}`} />
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-none px-5 pt-6">
              <div className="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">pb-8</div>
                <div className={`h-8 ${stripes.white}`} />
              </div>
            </div>
            <div className="flex-none flex px-5 pt-6">
              <div className="flex bg-purple-500 shadow-lg rounded-lg overflow-hidden">
                <div className={`flex-none w-2 ${stripes.white}`} />
                <div className="flex-none p-4">pl-2</div>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add horizontal padding">
        <div className="flex justify-center font-mono text-white text-sm font-bold leading-6">
          <div className="bg-indigo-500 rounded-lg shadow-lg overflow-hidden flex">
            <div className={`w-8 ${stripes.white}`} />
            <div className="p-4">px-8</div>
            <div className={`w-8 ${stripes.white}`} />
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add vertical padding">
        <div className="flex justify-center font-mono text-white text-sm font-bold leading-6">
          <div className="bg-pink-500 rounded-lg shadow-lg overflow-hidden">
            <div className={`h-8 ${stripes.white}`} />
            <div className="p-4">py-8</div>
            <div className={`h-8 ${stripes.white}`} />
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add padding to a all sides">
        <div className="flex justify-center font-mono text-white text-sm font-bold leading-6">
          <div
            className={`bg-violet-500 rounded-lg shadow-lg p-8 ${stripes.white}`}
          >
            <div className="bg-violet-500 p-4">p-8</div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Using logical properties">
        <div className="grid grid-cols-2 gap-x-4 place-items-center">
          <div className="flex flex-col items-start gap-y-4">
            <p className="text-sm font-medium">Left-to-right</p>
            <div className="bg-indigo-500 rounded-lg shadow-lg overflow-hidden flex font-mono text-white text-sm font-bold leading-6">
              <div className={`w-8 ${stripes.white}`} />
              <div className="p-4">ps-8</div>
            </div>
            <div className="mt-4 bg-indigo-500 rounded-lg shadow-lg overflow-hidden flex font-mono text-white text-sm font-bold leading-6">
              <div className="p-4">pe-8</div>
              <div className={`w-8 ${stripes.white}`} />
            </div>
          </div>
          <div className="flex flex-col items-end gap-y-4">
            <p className="text-sm font-medium">Right-to-left</p>
            <div className="bg-indigo-500 rounded-lg shadow-lg overflow-hidden flex font-mono text-white text-sm font-bold leading-6">
              <div className="p-4">ps-8</div>
              <div className={`w-8 ${stripes.white}`} />
            </div>
            <div className="mt-4 bg-indigo-500 rounded-lg shadow-lg overflow-hidden flex font-mono text-white text-sm font-bold leading-6">
              <div className={`w-8 ${stripes.white}`} />
              <div className="p-4">pe-8</div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
