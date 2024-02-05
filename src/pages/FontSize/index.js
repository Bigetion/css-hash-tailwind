import React from "react";

import PanelSection from "components/PanelSection";

export default function FontSize() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Font Size</h1>
      </div>
      <PanelSection title="Setting the font size">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              text-sm
            </span>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              text-base
            </span>
            <p className="text-base font-medium text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              text-lg
            </span>
            <p className="text-lg font-medium text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              text-xl
            </span>
            <p className="text-xl font-medium text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              text-2xl
            </span>
            <p className="text-2xl font-medium text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
