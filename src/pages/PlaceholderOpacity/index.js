import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function PlaceholderOpacity() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Placeholder Opacity</h1>
        </div>
        <PanelSection title="Usage">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="space-y-4">
              <div className="max-w-xs">
                <input
                  className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="max-w-xs">
                <input
                  className="block appearance-none placeholder-gray-500 placeholder-opacity-75 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="max-w-xs">
                <input
                  className="block appearance-none placeholder-gray-500 placeholder-opacity-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="max-w-xs">
                <input
                  className="block appearance-none placeholder-gray-500 placeholder-opacity-25 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="max-w-xs">
                <input
                  className="block appearance-none placeholder-gray-500 placeholder-opacity-0 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
          </div>
        </PanelSection>
      </div>
    </Layout>
  );
}
