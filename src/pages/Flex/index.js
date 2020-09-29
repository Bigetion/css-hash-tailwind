import React from "react";

import PanelSection from "components/PanelSection";

export default function Flex() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Flex</h1>
      </div>
      <PanelSection title="Initial">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <p className="text-sm text-gray-600 mb-1">
            Items don't grow when there's extra space
          </p>
          <div className="flex bg-gray-200 mb-6">
            <div className="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Short
            </div>
            <div className="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Medium length
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-1">
            Items shrink if possible when needed
          </p>
          <div className="flex bg-gray-200">
            <div className="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Short
            </div>
            <div className="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Medium length
            </div>
            <div className="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ad
              labore ipsam, aut rem quo repellat esse tempore id, quidem
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Flex 1">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <p className="text-sm text-gray-600 mb-1">Default behavior</p>
          <div className="flex bg-gray-200 mb-6">
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Short
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Medium length
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Significantly larger amount of content
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">
            With <code>.flex-1</code>
          </p>
          <div className="flex bg-gray-200">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Short
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Medium length
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Significantly larger amount of content
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Auto">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <p className="text-sm text-gray-600 mb-1">Default behavior</p>
          <div className="flex bg-gray-200 mb-6">
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Short
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Medium length
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Significantly larger amount of content
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">
            With <code>.flex-auto</code>
          </p>
          <div className="flex bg-gray-200">
            <div className="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Short
            </div>
            <div className="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Medium length
            </div>
            <div className="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Significantly larger amount of content
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="None">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex bg-gray-200">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Item that can grow or shrink if needed
            </div>
            <div className="flex-none text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
              Item that cannot grow or shrink
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Item that can grow or shrink if needed
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
