import React from "react";

import PanelSection from "components/PanelSection";

export default function TextAlign() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Text Align</h1>
      </div>
      <PanelSection title="Usage">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="mb-6">
            <p className="text-sm text-gray-600">.text-left</p>
            <p className="text-left text-base text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              fugit, enim molestiae praesentium eveniet, recusandae et error
              beatae facilis ex harum consequuntur, quia pariatur non. Doloribus
              illo, ullam blanditiis ab.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.text-center</p>
            <p className="text-center text-base text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              fugit, enim molestiae praesentium eveniet, recusandae et error
              beatae facilis ex harum consequuntur, quia pariatur non. Doloribus
              illo, ullam blanditiis ab.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.text-right</p>
            <p className="text-right text-base text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              fugit, enim molestiae praesentium eveniet, recusandae et error
              beatae facilis ex harum consequuntur, quia pariatur non. Doloribus
              illo, ullam blanditiis ab.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.text-justify</p>
            <p className="text-justify text-base text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              fugit, enim molestiae praesentium eveniet, recusandae et error
              beatae facilis ex harum consequuntur, quia pariatur non. Doloribus
              illo, ullam blanditiis ab.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
