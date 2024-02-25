import React from "react";

import PanelSection from "components/PanelSection";

export default function BoxShadow() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Box Shadow</h1>
      </div>
      <PanelSection title="Adding an outer shadow">
        <div className="flex sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-12 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                shadow-md
              </p>
              <div className="w-24 h-24 rounded-lg bg-white shadow-md" />
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                shadow-lg
              </p>
              <div className="w-24 h-24 rounded-lg bg-white shadow-lg" />
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                shadow-xl
              </p>
              <div className="w-24 h-24 rounded-lg bg-white shadow-xl" />
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                shadow-2xl
              </p>
              <div className="w-24 h-24 rounded-lg bg-white shadow-2xl" />
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Adding an inner shadow">
        <div className="flex items-center justify-around gap-4 font-mono font-bold">
          <div className="flex flex-col items-center">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              shadow-inner
            </p>
            <div className="w-24 h-24 rounded-lg bg-white shadow-inner ring-1 ring-black ring-opacity-5" />
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Removing the shadow">
        <div className="flex items-center justify-around gap-4 font-mono font-bold">
          <div className="flex flex-col items-center">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              shadow-none
            </p>
            <div className="w-24 h-24 rounded-lg bg-white shadow-none" />
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
