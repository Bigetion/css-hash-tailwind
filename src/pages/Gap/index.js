import React from "react";

import PanelSection from "components/PanelSection";

export default function Gap() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Gap</h1>
      </div>
      <PanelSection title="Gap">
        <div className="">
          <div>
            <div className="mb-1 text-sm text-gray-600">gap-1</div>
            <div className="grid grid-cols-2 gap-1">
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
            </div>
          </div>
          <div className="mt-8">
            <div className="mb-1 text-sm text-gray-600">gap-2</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
            </div>
          </div>
          <div className="mt-8">
            <div className="mb-1 text-sm text-gray-600">gap-6</div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Row Gap">
        <div className="">
          <div>
            <div className="mb-1 text-sm text-gray-600">gap-y-1</div>
            <div className="grid grid-cols-2 gap-y-1">
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-1 text-sm text-gray-600">gap-y-2</div>
            <div className="grid grid-cols-2 gap-y-2">
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-1 text-sm text-gray-600">gap-y-6</div>
            <div className="grid grid-cols-2 gap-y-6">
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Column Gap">
        <div className="">
          <div>
            <div className="mb-1 text-sm text-gray-600">gap-x-1</div>
            <div className="grid grid-cols-2 gap-x-1">
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-1 text-sm text-gray-600">gap-x-2</div>
            <div className="grid grid-cols-2 gap-x-2">
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-1 text-sm text-gray-600">gap-x-6</div>
            <div className="grid grid-cols-2 gap-x-6">
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-500 h-16"></div>
              <div className="text-gray-700 text-center bg-gray-400 h-16"></div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
