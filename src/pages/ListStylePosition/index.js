import React from "react";

import PanelSection from "components/PanelSection";

export default function ListStylePosition() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">List Style Position</h1>
      </div>
      <PanelSection title="Setting the list style position">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="relative">
            <div className="absolute left-8 -top-8 -bottom-8 w-px bg-pink-400 bg-opacity-40" />
            <p className="font-medium text-sm text-slate-500 font-mono mb-3 ml-8">
              list-inside
            </p>
            <ul className="list-disc list-inside text-slate-700 bg-white rounded-xl shadow-lg ring-1 ring-slate-900 ring-opacity-5 p-4 pl-8">
              <li>5 cups chopped Porcini mushrooms</li>
              <li>1/2 cup of olive oil</li>
              <li>3lb of celery</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute left-8 -top-0 sm:-top-8 -bottom-8 w-px bg-pink-400 bg-opacity-40" />
            <p className="font-medium text-sm text-slate-500 font-mono mb-3 ml-8">
              list-outside
            </p>
            <ul className="list-disc list-outside text-slate-700 bg-white rounded-xl shadow-lg ring-1 ring-slate-900 ring-opacity-5 p-4 pl-8">
              <li>5 cups chopped Porcini mushrooms</li>
              <li>1/2 cup of olive oil</li>
              <li>3lb of celery</li>
            </ul>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
