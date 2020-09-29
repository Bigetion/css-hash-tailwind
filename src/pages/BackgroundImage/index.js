import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function BackgroundImage() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Background Image</h1>
        </div>
        <PanelSection title="Linear Gradient">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-8">
            <div className="h-24 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"></div>
          </div>
        </PanelSection>
      </div>
    </Layout>
  );
}
