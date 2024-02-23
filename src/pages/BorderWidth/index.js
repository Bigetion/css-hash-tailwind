import React from "react";

import PanelSection from "components/PanelSection";

export default function BorderWidth() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Border Width</h1>
      </div>
      <PanelSection title="All sides">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border
            </p>
            <div className="p-4 shadow-sm bg-white w-16 h-16 border-indigo-600 border" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-2
            </p>
            <div className="p-4 shadow-sm bg-white w-16 h-16 border-indigo-600 border-2" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-4
            </p>
            <div className="p-4 shadow-sm bg-white w-16 h-16 border-indigo-600 border-4" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-8
            </p>
            <div className="p-4 shadow-sm bg-white w-16 h-16 border-indigo-600 border-8" />
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Individual sides">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-t-4
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-indigo-500 border-t-4" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-r-4
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-indigo-500 border-r-4" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-b-4
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-indigo-500 border-b-4" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-l-4
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-indigo-500 border-l-4" />
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Horizontal and vertical sides">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-x-4
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-indigo-500 border-x-4"></div>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-y-4
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-indigo-500 border-y-4"></div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Between Elements" paddingless>
        <div className="flex flex-col divide-y divide-slate-200 font-mono text-white text-sm text-center font-bold leading-6 shadow-lg overflow-hidden max-w-sm mx-auto">
          <div className="p-4 text-slate-400 bg-white">01</div>
          <div className="p-4 text-slate-400 bg-white">02</div>
          <div className="p-4 text-slate-400 bg-white">03</div>
        </div>
      </PanelSection>
      <PanelSection title="Using logical properties">
        <div className="grid grid-cols-2 gap-x-4 place-items-center">
          <div className="flex flex-col items-start gap-y-4" dir="ltr">
            <p className="font-medium text-sm text-slate-500 font-mono text-center">
              Left-to-right
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-indigo-500 border-s-4"></div>
          </div>
          <div className="flex flex-col items-start gap-y-4" dir="rtl">
            <p className="font-medium text-sm text-slate-500 font-mono text-center">
              Right-to-left
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-indigo-500 border-s-4"></div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
