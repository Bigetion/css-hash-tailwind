import React from "react";

import PanelSection from "components/PanelSection";

export default function VerticalAlign() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Vertical Align</h1>
      </div>
      <PanelSection title="Baseline">
        <div className="bg-white rounded-lg shadow-lg ring-1 ring-slate-900 ring-opacity-5 py-4 max-w-md mx-auto dark:bg-slate-800 dark:ring-0 dark:highlight-white/5">
          <div className="leading-none relative">
            <span className="w-0 h-8 inline-block align-baseline">
              <span className="absolute top-0 border-slate-200 border-t border-b border-dashed w-full h-8 dark:border-slate-700"></span>
              <span className="absolute top-0 border-slate-200 border-b border-dashed w-full h-4 dark:border-slate-700"></span>
            </span>
            <span className="relative z-10 text-slate-700 font-medium px-4 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </span>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Top">
        <div className="bg-white rounded-lg shadow-lg ring-1 ring-slate-900 ring-opacity-5 py-4 max-w-md mx-auto dark:bg-slate-800 dark:ring-0 dark:highlight-white/5">
          <div className="leading-none relative">
            <span className="w-0 h-8 inline-block align-top">
              <span className="absolute top-0 border-slate-200 border-t border-b border-dashed w-full h-8 dark:border-slate-700"></span>
              <span className="absolute top-0 border-slate-200 border-b border-dashed w-full h-4 dark:border-slate-700"></span>
            </span>
            <span className="relative z-10 text-slate-700 font-medium px-4 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </span>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Middle">
        <div className="bg-white rounded-lg shadow-lg ring-1 ring-slate-900 ring-opacity-5 py-4 max-w-md mx-auto dark:bg-slate-800 dark:ring-0 dark:highlight-white/5">
          <div className="leading-none relative">
            <span className="w-0 h-8 inline-block align-middle">
              <span className="absolute top-0 border-slate-200 border-t border-b border-dashed w-full h-8 dark:border-slate-700"></span>
              <span className="absolute top-0 border-slate-200 border-b border-dashed w-full h-4 dark:border-slate-700"></span>
            </span>
            <span className="relative z-10 text-slate-700 font-medium px-4 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </span>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Bottom">
        <div className="bg-white rounded-lg shadow-lg ring-1 ring-slate-900 ring-opacity-5 py-4 max-w-md mx-auto dark:bg-slate-800 dark:ring-0 dark:highlight-white/5">
          <div className="leading-none relative">
            <span className="w-0 h-8 inline-block align-bottom">
              <span className="absolute top-0 border-slate-200 border-t border-b border-dashed w-full h-8 dark:border-slate-700"></span>
              <span className="absolute top-0 border-slate-200 border-b border-dashed w-full h-4 dark:border-slate-700"></span>
            </span>
            <span className="relative z-10 text-slate-700 font-medium px-4 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </span>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Text top">
        <div className="bg-white rounded-lg shadow-lg ring-1 ring-slate-900 ring-opacity-5 py-4 max-w-md mx-auto dark:bg-slate-800 dark:ring-0 dark:highlight-white/5">
          <div className="leading-none relative">
            <span className="w-0 h-8 inline-block align-text-top">
              <span className="absolute top-0 border-slate-200 border-t border-b border-dashed w-full h-8 dark:border-slate-700"></span>
              <span className="absolute top-0 border-slate-200 border-b border-dashed w-full h-4 dark:border-slate-700"></span>
            </span>
            <span className="relative z-10 text-slate-700 font-medium px-4 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </span>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Text bottom">
        <div className="bg-white rounded-lg shadow-lg ring-1 ring-slate-900 ring-opacity-5 py-4 max-w-md mx-auto dark:bg-slate-800 dark:ring-0 dark:highlight-white/5">
          <div className="leading-none relative">
            <span className="w-0 h-8 inline-block align-text-bottom">
              <span className="absolute top-0 border-slate-200 border-t border-b border-dashed w-full h-8 dark:border-slate-700"></span>
              <span className="absolute top-0 border-slate-200 border-b border-dashed w-full h-4 dark:border-slate-700"></span>
            </span>
            <span className="relative z-10 text-slate-700 font-medium px-4 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </span>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
