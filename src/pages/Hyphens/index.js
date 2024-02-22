import React from "react";

import PanelSection from "components/PanelSection";

export default function Hyphens() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Hyphens</h1>
      </div>
      <PanelSection title="None" paddingless>
        <div className="mx-auto max-w-xs bg-white shadow-xl p-12 text-slate-500">
          <p className="hyphens-none">
            Officially recognized by the Duden dictionary as the longest word in
            German,{" "}
            <span className="text-slate-900 font-medium" lang="de">
              {" "}
              Kraftfahrzeug­haftpflichtversicherung
            </span>{" "}
            is a 36 letter word for motor vehicle liability insurance.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Manual" paddingless>
        <div className="mx-auto max-w-xs bg-white shadow-xl p-12 text-slate-500">
          <p className="hyphens-manual">
            Officially recognized by the Duden dictionary as the longest word in
            German,{" "}
            <span className="text-slate-900 font-medium" lang="de">
              {" "}
              Kraftfahrzeug­haftpflichtversicherung
            </span>{" "}
            is a 36 letter word for motor vehicle liability insurance.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Auto" paddingless>
        <div className="mx-auto max-w-xs bg-white shadow-xl p-12 text-slate-500">
          <p className="hyphens-auto">
            Officially recognized by the Duden dictionary as the longest word in
            German,{" "}
            <span className="text-slate-900 font-medium" lang="de">
              {" "}
              Kraftfahrzeughaftpflichtversicherung
            </span>{" "}
            is a 36 letter word for motor vehicle liability insurance.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
