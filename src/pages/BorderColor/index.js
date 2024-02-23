import React from "react";

import PanelSection from "components/PanelSection";

export default function BorderColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Border Color</h1>
      </div>
      <PanelSection title="Setting the border color">
        <div className="max-w-xs mx-auto space-y-1">
          <label>
            <span className="text-slate-900 text-sm font-medium">
              Email address
            </span>
            <input
              type="text"
              placeholder="jane@example.com"
              className="font-sans block text-sm leading-5 w-full py-2 px-3 border-2 border-rose-600 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-rose-200 focus:border-rose-500"
            />
          </label>
          <span className="text-rose-600 text-sm">This field is required.</span>
        </div>
      </PanelSection>
      <PanelSection title="Changing the opacity">
        <div className="grid lg:grid-cols-3 gap-4 text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-opacity-100
            </p>
            <div className="p-4 shadow-sm bg-white w-16 h-16 border-indigo-500 border-opacity-100 border-4" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-opacity-75
            </p>
            <div className="p-4 shadow-sm bg-white w-16 h-16 border-indigo-500 border-opacity-75 border-4" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-opacity-50
            </p>
            <div className="p-4 shadow-sm bg-white w-16 h-16 border-indigo-500 border-opacity-50 border-4" />
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Individual sides">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-t-indigo-500
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-t-4 border-indigo-500" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-r-indigo-500
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-r-4 border-indigo-500" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-b-indigo-500
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-b-4 border-indigo-500" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-l-indigo-500
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-l-4 border-indigo-500" />
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Horizintal and vertical sides">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-x-indigo-500
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-indigo-500 border-x-4" />
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-y-indigo-500
            </p>
            <div className="p-4 shadow-sm bg-white ring-1 ring-slate-900 ring-opacity-5 w-16 h-16 border-indigo-500 border-y-4" />
          </div>
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
      <PanelSection title="Hover, focus, and other states">
        <div className="grid place-content-center text-white text-sm text-center font-bold leading-6">
          <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 hover:border-indigo-300 rounded-md shadow-sm focus:outline-none">
            Send email
          </button>
        </div>
      </PanelSection>
    </div>
  );
}
