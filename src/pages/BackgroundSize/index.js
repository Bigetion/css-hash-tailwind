import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function BackgroundSize() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Background Size</h1>
        </div>
        <PanelSection title="Auto">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div
              className="w-full bg-gray-400 h-48 bg-center bg-no-repeat bg-auto"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')`,
              }}
            ></div>
          </div>
        </PanelSection>
        <PanelSection title="Cover">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div
              className="w-full bg-gray-400 h-48 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')`,
              }}
            ></div>
          </div>
        </PanelSection>
        <PanelSection title="Contain">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div
              className="w-full bg-gray-400 h-48 bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')`,
              }}
            ></div>
          </div>
        </PanelSection>
      </div>
    </Layout>
  );
}
