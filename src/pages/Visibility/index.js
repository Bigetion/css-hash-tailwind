import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function Visibility() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Visibility</h1>
        </div>
        <PanelSection title="Visible">
          <div className="rounded-lg overflow-hidden border border-gray-400 flex justify-center p-4">
            <div className="bg-gray-400 w-32 h-12"></div>
            <div className="visible bg-gray-600 w-32 h-12"></div>
            <div className="bg-gray-400 w-32 h-12"></div>
          </div>
        </PanelSection>
        <PanelSection title="Invisible">
          <div className="rounded-lg overflow-hidden border border-gray-400 flex justify-center p-4">
            <div className="bg-gray-400 w-32 h-12"></div>
            <div className="invisible bg-gray-600 w-32 h-12"></div>
            <div className="bg-gray-400 w-32 h-12"></div>
          </div>
        </PanelSection>
      </div>
    </Layout>
  );
}
