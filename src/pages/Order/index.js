import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function Order() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Order</h1>
        </div>
        <PanelSection title="Usage">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="flex bg-gray-200">
              <div className="order-last text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
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
