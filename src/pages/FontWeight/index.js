import React from "react";

import PanelSection from "components/PanelSection";

export default function FontWeight() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Font Weight</h1>
      </div>
      <PanelSection title="Setting the font weight">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              font-light
            </span>
            <p className="font-light text-lg text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              font-normal
            </span>
            <p className="font-normal text-lg text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              font-medium
            </span>
            <p className="font-medium text-lg text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              font-semibold
            </span>
            <p className="font-semibold text-lg text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              font-bold
            </span>
            <p className="font-bold text-lg text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
