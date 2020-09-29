import React from "react";

import PanelSection from "components/PanelSection";

export default function TopRightBottomLeft() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Top Right Bottom Left</h1>
      </div>
      <PanelSection title="Usage">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex justify-around mb-8">
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">
                .inset-x-0.top-0
              </p>
              <div className="relative h-24 w-24 bg-gray-400">
                <div className="absolute inset-x-0 top-0 h-8 bg-gray-700"></div>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">
                .inset-y-0.right-0
              </p>
              <div className="relative h-24 w-24 bg-gray-400">
                <div className="absolute inset-y-0 right-0 w-8 bg-gray-700"></div>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">
                .inset-x-0.bottom-0
              </p>
              <div className="relative h-24 w-24 bg-gray-400">
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gray-700"></div>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">
                .inset-y-0.left-0
              </p>
              <div className="relative h-24 w-24 bg-gray-400">
                <div className="absolute inset-y-0 left-0 w-8 bg-gray-700"></div>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">.inset-0</p>
              <div className="relative h-24 w-24 bg-gray-400">
                <div className="absolute inset-0 bg-gray-700"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">
                .left-0.top-0
              </p>
              <div className="relative h-24 w-24 bg-gray-400">
                <div className="absolute left-0 top-0 h-8 w-8 bg-gray-700"></div>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">
                .top-0.right-0
              </p>
              <div className="relative h-24 w-24 bg-gray-400">
                <div className="absolute top-0 right-0 h-8 w-8 bg-gray-700"></div>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">
                .right-0.bottom-0
              </p>
              <div className="relative h-24 w-24 bg-gray-400">
                <div className="absolute right-0 bottom-0 h-8 w-8 bg-gray-700"></div>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">
                .bottom-0.left-0
              </p>
              <div className="relative h-24 w-24 bg-gray-400">
                <div className="absolute bottom-0 left-0 h-8 w-8 bg-gray-700"></div>
              </div>
            </div>
            <div className="relative h-24 w-24 opacity-0"></div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
