import React from "react";

import PanelSection from "components/PanelSection";

export default function AccentColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Accent Color</h1>
      </div>
      <PanelSection title="Setting the accent color">
        <div className="flex flex-wrap justify-center gap-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked />
            <div className="text-slate-900 text-sm font-semibold">
              Browser default
            </div>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-pink-500" defaultChecked />
            <div className="text-slate-900 text-sm font-semibold">
              Customized
            </div>
          </label>
        </div>
      </PanelSection>
    </div>
  );
}
