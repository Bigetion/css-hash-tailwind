import React from "react";

import PanelSection from "components/PanelSection";

export default function TextDecorationColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Decoration Color</h1>
      </div>
      <PanelSection title="Setting the text decoration color">
        <div className="bg-white p-8 text-slate-900 shadow-lg max-w-sm mx-auto text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <p className="text-sm leading-6">
            I’m Derek, an astro-engineer based in Tattooine. I like to build
            X-Wings at{" "}
            <span className="font-bold underline decoration-sky-500 decoration-2 dark:text-slate-200">
              My Company, Inc
            </span>
            . Outside of work, I like to{" "}
            <span className="font-bold underline decoration-pink-500 decoration-2 dark:text-slate-200">
              watch pod-racing
            </span>{" "}
            and have{" "}
            <span className="font-bold underline decoration-indigo-500 decoration-2 dark:text-slate-200">
              light-saber
            </span>{" "}
            fights.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Changing the opacity">
        <div className="bg-white p-8 text-slate-900 shadow-lg max-w-sm mx-auto text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <p className="text-sm leading-6">
            I’m Derek, an astro-engineer based in Tattooine. I like to build
            X-Wings at{" "}
            <span className="font-bold underline decoration-sky-500 decoration-2 decoration-opacity-30 dark:text-slate-200">
              My Company, Inc
            </span>
            . Outside of work, I like to{" "}
            <span className="font-bold underline decoration-pink-500 decoration-2 decoration-opacity-30 dark:text-slate-200">
              watch pod-racing
            </span>{" "}
            and have{" "}
            <span className="font-bold underline decoration-indigo-500 decoration-2 decoration-opacity-30 dark:text-slate-200">
              light-saber
            </span>{" "}
            fights.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
