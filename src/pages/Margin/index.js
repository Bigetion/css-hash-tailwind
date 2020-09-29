import React from "react";

import PanelSection from "components/PanelSection";

export default function Margin() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Margin</h1>
      </div>

      <PanelSection title="Add margin to a single side">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex justify-around items-start">
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">mt-8</p>
              <div className="flex bg-gray-400">
                <span className="mt-8 bg-yellow-200">Target</span>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">mr-8</p>
              <div className="flex bg-gray-400">
                <span className="mr-8 bg-yellow-200">Target</span>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">mb-8</p>
              <div className="flex bg-gray-400">
                <span className="mb-8 bg-yellow-200">Target</span>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">ml-8</p>
              <div className="flex bg-gray-400">
                <span className="ml-8 bg-yellow-200">Target</span>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add horizontal margin">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex justify-around items-center">
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">mx-8</p>
              <div className="flex bg-gray-400">
                <span className="mx-8 bg-yellow-200">Target</span>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add vertical margin">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex justify-around items-center">
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">my-8</p>
              <div className="flex bg-gray-400">
                <span className="my-8 bg-yellow-200">Target</span>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add margin to a all sides">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex justify-around items-center">
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">m-8</p>
              <div className="flex bg-gray-400">
                <span className="m-8 bg-yellow-200">Target</span>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Negative margins">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex justify-around items-center">
            <div>
              <div className="bg-gray-400 h-16 w-32"></div>
              <div className="bg-yellow-200 h-16 mx-auto -mt-8 w-24 flex items-center justify-center">
                -mt-8
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
