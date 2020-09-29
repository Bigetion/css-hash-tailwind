import React from "react";

import PanelSection from "components/PanelSection";

export default function Width() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Width</h1>
      </div>
      <PanelSection title="Auto">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="w-auto bg-gray-400 mb-4 px-2">
            .w-auto on block element
          </div>
          <div className="w-auto inline-block bg-gray-400 px-2">
            .w-auto on inline-block element
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Screen Width">
        <div className="rounded-lg overflow-hidden border border-gray-400 overflow-x-scroll p-4">
          <div className="w-screen bg-gray-400 h-4"></div>
        </div>
      </PanelSection>
      <PanelSection title="Fixed Width">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-0</p>
            <div className="h-4 bg-gray-400 w-0"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-px</p>
            <div className="h-4 bg-gray-400 w-px"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-1</p>
            <div className="h-4 bg-gray-400 w-1"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-2</p>
            <div className="h-4 bg-gray-400 w-2"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-3</p>
            <div className="h-4 bg-gray-400 w-3"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-4</p>
            <div className="h-4 bg-gray-400 w-4"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-5</p>
            <div className="h-4 bg-gray-400 w-5"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-6</p>
            <div className="h-4 bg-gray-400 w-6"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-8</p>
            <div className="h-4 bg-gray-400 w-8"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-10</p>
            <div className="h-4 bg-gray-400 w-10"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-12</p>
            <div className="h-4 bg-gray-400 w-12"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-16</p>
            <div className="h-4 bg-gray-400 w-16"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-20</p>
            <div className="h-4 bg-gray-400 w-20"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-24</p>
            <div className="h-4 bg-gray-400 w-24"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-32</p>
            <div className="h-4 bg-gray-400 w-32"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-40</p>
            <div className="h-4 bg-gray-400 w-40"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-48</p>
            <div className="h-4 bg-gray-400 w-48"></div>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-56</p>
            <div className="h-4 bg-gray-400 w-56"></div>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-gray-600 w-12 mr-2">.w-64</p>
            <div className="h-4 bg-gray-400 w-64"></div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Fluid Width">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="bg-gray-200 p-4">
            <div className="flex mb-4">
              <div className="w-1/2 p-2 bg-gray-400 text-center">.w-1/2</div>
              <div className="w-1/2 p-2 bg-gray-500 text-center">.w-1/2</div>
            </div>
            <div className="flex mb-4">
              <div className="w-2/5 p-2 bg-gray-400 text-center">.w-2/5</div>
              <div className="w-3/5 p-2 bg-gray-500 text-center">.w-3/5</div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/3 p-2 bg-gray-400 text-center">.w-1/3</div>
              <div className="w-2/3 p-2 bg-gray-500 text-center">.w-2/3</div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/4 p-2 bg-gray-400 text-center">.w-1/4</div>
              <div className="w-3/4 p-2 bg-gray-500 text-center">.w-3/4</div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/5 p-2 bg-gray-400 text-center">.w-1/5</div>
              <div className="w-4/5 p-2 bg-gray-500 text-center">.w-4/5</div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/6 p-2 bg-gray-400 text-center">.w-1/6</div>
              <div className="w-5/6 p-2 bg-gray-500 text-center">.w-5/6</div>
            </div>
            <div className="w-full p-2 bg-gray-400 text-center">.w-full</div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
