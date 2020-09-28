import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function JustifyContent() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Justify Content</h1>
        </div>
        <PanelSection title="Start">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="flex justify-start bg-gray-200">
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                2
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Center">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="flex justify-center bg-gray-200">
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                2
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="End">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="flex justify-end bg-gray-200">
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                2
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Space Between">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="flex justify-between bg-gray-200">
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                2
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Space Around">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="flex justify-around bg-gray-200">
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                2
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Space Evenly">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="flex justify-evenly bg-gray-200">
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                2
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
            </div>
          </div>
        </PanelSection>
      </div>
    </Layout>
  );
}
