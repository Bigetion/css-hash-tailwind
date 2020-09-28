import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function TextDecoration() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Text Decoration</h1>
        </div>
        <PanelSection title="Underline">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <p className="underline text-lg text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
        </PanelSection>
        <PanelSection title="Line through">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <p className="line-through text-lg text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
        </PanelSection>
        <PanelSection title="No underline">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="text-center">
              <a href="/" className="no-underline text-blue-500 text-lg">
                Link with no underline
              </a>
            </div>
          </div>
        </PanelSection>
      </div>
    </Layout>
  );
}
