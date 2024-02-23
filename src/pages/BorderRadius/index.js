import React from "react";

import PanelSection from "components/PanelSection";

export default function BorderRadius() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Border Radius</h1>
      </div>
      <PanelSection title="Rounded corners">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded
            </p>
            <div className="p-4 shadow-sm bg-purple-500 w-16 h-16 rounded" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-md
            </p>
            <div className="p-4 shadow-sm bg-purple-500 w-16 h-16 rounded-md" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-lg
            </p>
            <div className="p-4 shadow-sm bg-purple-500 w-16 h-16 rounded-lg" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-full
            </p>
            <div className="p-4 shadow-sm bg-purple-500 w-16 h-16 rounded-full" />
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Pills buttons">
        <div className="flex justify-center gap-4 text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-full
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">
              Save Changes
            </button>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="No rounding">
        <div className="flex justify-center gap-4 text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-none
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm">
              Save Changes
            </button>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Rounding sides separately">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-t-lg
            </p>
            <div className="p-4 shadow-sm bg-blue-500 w-16 h-16 rounded-t-lg" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-r-lg
            </p>
            <div className="p-4 shadow-sm bg-blue-500 w-16 h-16 rounded-r-lg" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-b-lg
            </p>
            <div className="p-4 shadow-sm bg-blue-500 w-16 h-16 rounded-b-lg" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-l-lg
            </p>
            <div className="p-4 shadow-sm bg-blue-500 w-16 h-16 rounded-l-lg" />
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Rounding corners separately">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-tl-lg
            </p>
            <div className="p-4 shadow-sm bg-pink-500 w-16 h-16 rounded-tl-lg" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-tr-lg
            </p>
            <div className="p-4 shadow-sm bg-pink-500 w-16 h-16 rounded-tr-lg" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-br-lg
            </p>
            <div className="p-4 shadow-sm bg-pink-500 w-16 h-16 rounded-br-lg" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              rounded-bl-lg
            </p>
            <div className="p-4 shadow-sm bg-pink-500 w-16 h-16 rounded-bl-lg" />
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Use logical properties">
        <div className="grid grid-cols-2 gap-x-4 place-items-center">
          <div className="flex flex-col items-start gap-y-4" dir="ltr">
            <p className="font-medium text-sm text-slate-500 font-mono">
              Left-to-right
            </p>
            <div className="p-4 shadow-sm bg-blue-500 w-16 h-16 rounded-s-lg" />
          </div>
          <div className="flex flex-col items-start gap-y-4" dir="rtl">
            <p className="font-medium text-sm text-slate-500 font-mono">
              Right-to-left
            </p>
            <div className="p-4 shadow-sm bg-blue-500 w-16 h-16 rounded-s-lg" />
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
