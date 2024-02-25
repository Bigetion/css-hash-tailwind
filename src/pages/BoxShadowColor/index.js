import React from "react";

import PanelSection from "components/PanelSection";

export default function BoxShadow() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Box Shadow</h1>
      </div>
      <PanelSection title="Setting the box shadow color">
        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              shadow-cyan-500
            </p>
            <button className="py-2 px-3 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-cyan-500 focus:outline-none">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              shadow-blue-500
            </p>
            <button className="py-2 px-3 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500 focus:outline-none">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              shadow-indigo-500
            </p>
            <button className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Using shadows on colored backgrounds" paddingless>
        <div className="flex justify-around bg-indigo-300 px-8 pt-10 pb-12 space-x-6">
          <div className="flex flex-col items-center">
            <p className="mb-3 text-sm font-medium text-indigo-900">
              Default shadow
            </p>
            <button className="py-2 px-3 bg-white text-indigo-600 text-sm font-semibold rounded-md shadow-lg focus:outline-none">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-3 text-sm font-medium text-indigo-900">
              Colored shadow
            </p>
            <button className="py-2 px-3 bg-white text-indigo-600 text-sm font-semibold rounded-md shadow-lg shadow-indigo-500/40 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
