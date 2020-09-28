import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function GridColumnStartEnd() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Grid Column Start End</h1>
        </div>
        <PanelSection title="Spanning columns">
          <div className="rounded-lg overflow-hidden border border-gray-400 bg-white p-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3 bg-gray-300 h-12 flex items-center justify-center"></div>
              <div className="col-span-2 bg-gray-500 h-12 flex items-center justify-center"></div>
              <div className="col-span-1 bg-gray-300 h-12 flex items-center justify-center"></div>
              <div className="col-span-1 bg-gray-300 h-12 flex items-center justify-center"></div>
              <div className="col-span-2 bg-gray-500 h-12 flex items-center justify-center"></div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Starting and ending lines">
          <div className="rounded-lg overflow-hidden border border-gray-400 bg-white p-8">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-2 col-span-4 bg-gray-300 h-12 flex items-center justify-center"></div>
              <div className="col-start-1 col-end-3 bg-gray-500 h-12 flex items-center justify-center"></div>
              <div className="col-end-7 col-span-2 bg-gray-500 h-12 flex items-center justify-center"></div>
              <div className="col-start-1 col-end-7 bg-gray-300 h-12 flex items-center justify-center"></div>
            </div>
          </div>
        </PanelSection>
      </div>
    </Layout>
  );
}
