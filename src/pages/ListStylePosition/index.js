import React from "react";

import PanelSection from "components/PanelSection";

export default function ListStylePosition() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">List Style Position</h1>
      </div>
      <PanelSection title="Usage">
        <div className="p-4 px-8">
          <div className="mb-6">
            <p className="text-sm text-gray-600">.list-inside</p>
            <ul className="list-disc list-inside bg-gray-200 text-gray-800 py-2">
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
              <li>
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </li>
              <li>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </li>
            </ul>
            <p></p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.list-outside</p>
            <ul className="list-disc list-outside bg-gray-200 text-gray-800 py-2">
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
              <li>
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </li>
              <li>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </li>
            </ul>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
