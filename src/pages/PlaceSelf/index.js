import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function PlaceSelf() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Place Self</h1>
        </div>
        <PanelSection title="Auto">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="grid grid-cols-3 place-items-stretch bg-gray-200 h-48">
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="place-self-auto text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
                2
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                4
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                5
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                6
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Start">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="grid grid-cols-3 place-items-stretch bg-gray-200 h-48">
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="place-self-start text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
                2
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                4
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                5
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                6
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Center">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="grid grid-cols-3 place-items-stretch bg-gray-200 h-48">
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="place-self-center text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
                2
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                4
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                5
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                6
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="End">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="grid grid-cols-3 place-items-stretch bg-gray-200 h-48">
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="place-self-end text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
                2
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                4
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                5
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                6
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Stretch">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="grid grid-cols-3 place-items-stretch bg-gray-200 h-48">
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="place-self-stretch text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
                2
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                4
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                5
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                6
              </div>
            </div>
          </div>
        </PanelSection>
      </div>
    </Layout>
  );
}
