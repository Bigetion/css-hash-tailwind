import React from "react";

import PanelSection from "components/PanelSection";

export default function ListStyleType() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">List Style Type</h1>
      </div>
      <PanelSection title="Usage">
        <div className="">
          <div className="mb-6">
            <p className="text-sm text-gray-600">.list-disc</p>
            <ul className="list-disc list-inside">
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
              <li>
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </li>
              <li>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.list-decimal</p>
            <ol className="list-decimal list-inside">
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
              <li>
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </li>
              <li>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </li>
            </ol>
          </div>
          <div>
            <p className="text-sm text-gray-600">.list-none (default)</p>
            <ul className="default">
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
        </div>
      </PanelSection>
    </div>
  );
}
