import React from "react";

import PanelSection from "components/PanelSection";

export default function Padding() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Padding</h1>
      </div>
      <PanelSection title="Add padding to a single side">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex justify-around items-start">
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">pt-8</p>
              <div className="flex pt-8 bg-gray-400">
                <span className="bg-yellow-200">Target</span>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">pr-8</p>
              <div className="flex pr-8 bg-gray-400">
                <span className="bg-yellow-200">Target</span>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">pb-8</p>
              <div className="flex pb-8 bg-gray-400">
                <span className="bg-yellow-200">Target</span>
              </div>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">pl-8</p>
              <div className="flex pl-8 bg-gray-400">
                <span className="bg-yellow-200">Target</span>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add horizontal padding">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex justify-around items-center">
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">px-8</p>
              <div className="flex px-8 bg-gray-400">
                <span className="bg-yellow-200">Target</span>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add vertical padding">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex justify-around items-center">
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">py-8</p>
              <div className="flex py-8 bg-gray-400">
                <span className="bg-yellow-200">Target</span>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add padding to a all sides">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex justify-around items-center">
            <div>
              <p className="text-center text-sm text-gray-600 mb-1">p-8</p>
              <div className="flex p-8 bg-gray-400">
                <span className="bg-yellow-200">Target</span>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
