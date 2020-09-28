import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function Height() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Height</h1>
        </div>
        <PanelSection title="Auto">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="h-auto w-32 text-center mx-auto bg-gray-400 p-6">
              h-auto
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Screen Height">
          <div className="rounded-lg overflow-hidden border border-gray-400 overflow-x-scroll p-4">
            <div className="bg-gray-400 h-screen"></div>
          </div>
        </PanelSection>
        <PanelSection title="Fixed Height">
          <div className="rounded-lg overflow-hidden border border-gray-400 flex justify-around items-end text-sm p-4">
            <div className="mr-3">
              <div className="h-8 w-8 bg-gray-400"></div>
              <p className="text-center mt-2 text-sm">h-8</p>
            </div>
            <div className="mr-3">
              <div className="h-12 w-12 bg-gray-400"></div>
              <p className="text-center mt-2 text-sm">h-12</p>
            </div>
            <div>
              <div className="h-16 w-16 bg-gray-400"></div>
              <p className="text-center mt-2 text-sm">h-16</p>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Full Height">
          <div className="rounded-lg overflow-hidden border border-gray-400 flex justify-around items-end text-sm p-4">
            <div className="h-48">
              <div className="h-full p-6 bg-gray-400">h-full</div>
            </div>
          </div>
        </PanelSection>
      </div>
    </Layout>
  );
}
