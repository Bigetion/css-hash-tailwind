import React from "react";

import PanelSection from "components/PanelSection";

export default function Appearance() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Appearance</h1>
      </div>
      <PanelSection title="Usage">
        <div className="text-center p-4">
          <div className="max-w-sm mx-auto">
            <div className="flex my-4">
              <select className="w-16">
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
              </select>
              <div className="mx-4">Default browser styles applied</div>
            </div>
            <div className="flex my-4">
              <select className="appearance-none w-16">
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
              </select>
              <div className="mx-4">Default styles removed</div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
