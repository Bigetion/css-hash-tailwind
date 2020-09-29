import React from "react";

import PanelSection from "components/PanelSection";

export default function FontWeight() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Font Weight</h1>
      </div>
      <PanelSection title="Usage">
        <div className="rounded-lg overflow-hidden border border-gray-400 font-sans p-4">
          <div className="mb-6">
            <p className="text-sm text-gray-600">.font-hairline</p>
            <p className="font-hairline text-xl text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.font-thin</p>
            <p className="font-thin text-xl text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.font-light</p>
            <p className="font-light text-xl text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.font-normal</p>
            <p className="font-normal text-xl text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.font-medium</p>
            <p className="font-medium text-xl text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.font-semibold</p>
            <p className="font-semibold text-xl text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.font-bold</p>
            <p className="font-bold text-xl text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.font-extrabold</p>
            <p className="font-extrabold text-xl text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">.font-black</p>
            <p className="font-black text-xl text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
