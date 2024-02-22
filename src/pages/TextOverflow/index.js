import React from "react";

import PanelSection from "components/PanelSection";

export default function TextOverflow() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Overflow</h1>
      </div>
      <PanelSection title="Truncate" paddingless>
        <div className="mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7">
          <p className="truncate">
            The longest word in any of the major English language dictionaries
            is{" "}
            <span className="text-slate-900 font-medium">
              pneumonoultramicroscopicsilicovolcanoconiosis,
            </span>{" "}
            a word that refers to a lung disease contracted from the inhalation
            of very fine silica particles, specifically from a volcano;
            medically, it is the same as silicosis.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Ellipsis" paddingless>
        <div className="mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7">
          <p className="text-ellipsis overflow-hidden">
            The longest word in any of the major English language dictionaries
            is{" "}
            <span className="text-slate-900 font-medium">
              pneumonoultramicroscopicsilicovolcanoconiosis,
            </span>{" "}
            a word that refers to a lung disease contracted from the inhalation
            of very fine silica particles, specifically from a volcano;
            medically, it is the same as silicosis.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Clip" paddingless>
        <div className="mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7">
          <p className="text-clip overflow-hidden">
            The longest word in any of the major English language dictionaries
            is{" "}
            <span className="text-slate-900 font-medium">
              pneumonoultramicroscopicsilicovolcanoconiosis,
            </span>{" "}
            a word that refers to a lung disease contracted from the inhalation
            of very fine silica particles, specifically from a volcano;
            medically, it is the same as silicosis.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
