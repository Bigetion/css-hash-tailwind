import React from "react";

import PanelSection from "components/PanelSection";

export default function BoxShadow() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Box Shadow</h1>
      </div>
      <PanelSection title="Outer shadow">
        <div className="rounded-lg overflow-hidden border border-gray-400 bg-gray-100 lg:flex justify-around items-center text-sm p-4 py-8">
          <div className="text-center px-2">
            <div className="mb-1 text-xs text-gray-600">xs</div>
            <div className="mx-auto h-6 w-6 text-xs bg-white rounded shadow-xs"></div>
          </div>
          <div className="mt-6 lg:mt-0 text-center px-2">
            <div className="mb-1 text-xs text-gray-600">sm</div>
            <div className="mx-auto h-8 w-8 text-xs bg-white rounded shadow-sm"></div>
          </div>
          <div className="mt-6 lg:mt-0 text-center px-2">
            <div className="mb-1 text-xs text-gray-600">base</div>
            <div className="mx-auto h-10 w-10 text-xs bg-white rounded shadow"></div>
          </div>
          <div className="mt-6 lg:mt-0 text-center px-2">
            <div className="mb-1 text-xs text-gray-600">md</div>
            <div className="mx-auto h-12 w-12 text-xs bg-white rounded shadow-md"></div>
          </div>
          <div className="mt-6 lg:mt-0 text-center px-2">
            <div className="mb-1 text-xs text-gray-600">lg</div>
            <div className="mx-auto h-16 w-16 text-xs bg-white rounded shadow-lg"></div>
          </div>
          <div className="mt-6 lg:mt-0 text-center px-2">
            <div className="mb-1 text-xs text-gray-600">xl</div>
            <div className="mx-auto h-20 w-20 text-xs bg-white rounded shadow-xl"></div>
          </div>
          <div className="mt-6 lg:mt-0 text-center px-2">
            <div className="mb-1 text-xs text-gray-600">2xl</div>
            <div className="mx-auto h-24 w-24 text-xs bg-white rounded shadow-2xl"></div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Inner shadow">
        <div className="rounded-lg overflow-hidden border border-gray-400 flex justify-around text-sm p-4 py-8">
          <div className="rounded p-4 bg-gray-200 shadow-inner">
            .shadow-inner
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Focus outline shadow">
        <div className="rounded-lg overflow-hidden border border-gray-400 flex justify-center text-sm p-4 py-8">
          <button className="focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-32 mr-6">
            Unfocused
          </button>
          <button className="focus:outline-none shadow-outline bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-32">
            Focused
          </button>
        </div>
      </PanelSection>
      <PanelSection title="No shadow">
        <div className="rounded-lg overflow-hidden border border-gray-400 flex justify-around text-sm p-4 py-8">
          <div className="rounded p-4 shadow-none bg-gray-200">
            .shadow-none
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
