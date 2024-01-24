import React from "react";

import PanelSection from "components/PanelSection";

export default function FontSize() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Font Size</h1>
      </div>
      <PanelSection title="Usage">
        <div className="">
          <div className="mb-6">
            <p className="text-sm text-gray-600">.text-xs</p>
            <p className="text-xs truncate text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.text-sm</p>
            <p className="text-sm truncate text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.text-base</p>
            <p className="text-base truncate text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.text-lg</p>
            <p className="text-lg truncate text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.text-xl</p>
            <p className="text-xl truncate text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.text-2xl</p>
            <p className="text-2xl truncate text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.text-3xl</p>
            <p className="text-3xl truncate text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.text-4xl</p>
            <p className="text-4xl truncate text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">.text-5xl</p>
            <p className="text-5xl truncate text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">.text-6xl</p>
            <p className="text-6xl truncate text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
