import React from "react";

import PanelSection from "components/PanelSection";

export default function TextTransform() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Transform</h1>
      </div>
      <PanelSection title="Transforming text">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              normal-case
            </span>
            <p className="normal-case text-lg font-medium text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              uppercase
            </span>
            <p className="uppercase text-lg font-medium text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              lowercase
            </span>
            <p className="lowercase text-lg font-medium text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              capitalize
            </span>
            <p className="capitalize text-lg font-medium text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
