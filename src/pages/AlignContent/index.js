import React from "react";

import PanelSection from "components/PanelSection";

export default function AlignContent() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Align Content</h1>
      </div>
      <PanelSection title="Start">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex content-start flex-wrap bg-gray-200 h-48">
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">2</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">4</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">5</div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Center">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex content-center flex-wrap bg-gray-200 h-48">
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">2</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">4</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">5</div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="End">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex content-end flex-wrap bg-gray-200 h-48">
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">2</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">4</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">5</div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Space Between">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex content-between flex-wrap bg-gray-200 h-48">
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">2</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">4</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">5</div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Space Around">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex content-around flex-wrap bg-gray-200 h-48">
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">2</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">4</div>
            </div>
            <div className="w-1/3 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">5</div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
