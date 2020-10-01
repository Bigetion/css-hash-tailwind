import React from "react";

import PanelSection from "components/PanelSection";

export default function BorderWidth() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Border Width</h1>
      </div>
      <PanelSection title="All sides">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex">
            <div className="w-1/2 sm:flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .border-0
              </p>
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-0 border-gray-600"></div>
            </div>
            <div className="w-1/2 sm:flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">.border</p>
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border border-gray-600"></div>
            </div>
            <div className="w-1/2 sm:flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .border-2
              </p>
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-2 border-gray-600"></div>
            </div>
            <div className="w-1/2 sm:flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .border-4
              </p>
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-4 border-gray-600"></div>
            </div>
            <div className="w-1/2 sm:flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .border-8
              </p>
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-8 border-gray-600"></div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Individual sides">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex">
            <div className="w-1/2 sm:flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .border-t-2
              </p>
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-t-2 border-gray-600"></div>
            </div>
            <div className="w-1/2 sm:flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .border-r-2
              </p>
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-r-2 border-gray-600"></div>
            </div>
            <div className="w-1/2 sm:flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .border-b-2
              </p>
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-b-2 border-gray-600"></div>
            </div>
            <div className="w-1/2 sm:flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .border-l-2
              </p>
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-l-2 border-gray-600"></div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
