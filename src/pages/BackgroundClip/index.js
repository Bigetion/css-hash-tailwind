import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundClip() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Background Clip</h1>
      </div>
      <PanelSection title="Setting the background clip">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-10 sm:space-y-0 sm:space-x-10">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-clip-border
            </p>
            <div className="w-24 h-24 bg-clip-border p-3 rounded-lg shadow-lg bg-indigo-500 border-4 border-white border-opacity-50 border-dashed font-mono font-extrabold text-sm text-white flex justify-center items-center"></div>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-clip-padding
            </p>
            <div className="w-24 h-24 bg-clip-padding p-3 rounded-lg shadow-lg bg-indigo-500 border-4 border-indigo-500 border-opacity-50 border-dashed font-mono font-extrabold text-sm text-white flex justify-center items-center"></div>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-clip-content
            </p>
            <div className="w-24 h-24 bg-clip-content p-3 rounded-lg bg-indigo-500 border-4 border-indigo-500 border-opacity-50 border-dashed font-mono font-extrabold text-sm text-white flex justify-center items-center"></div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Cropping to text">
        <div className="text-4xl sm:text-5xl font-extrabold leading-none tracking-tight text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello world
          </span>
        </div>
      </PanelSection>
    </div>
  );
}
