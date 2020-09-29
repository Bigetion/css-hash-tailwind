import React from "react";

import PanelSection from "components/PanelSection";

export default function BorderCollapse() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Border Collapse</h1>
      </div>
      <PanelSection title="Collapse">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <table className="border-collapse border-2 border-gray-500">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2 text-gray-800">
                  State
                </th>
                <th className="border border-gray-400 px-4 py-2 text-gray-800">
                  City
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Indiana</td>
                <td className="border border-gray-400 px-4 py-2">
                  Indianapolis
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Ohio</td>
                <td className="border border-gray-400 px-4 py-2">Columbus</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Michigan</td>
                <td className="border border-gray-400 px-4 py-2">Detroit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelSection>
      <PanelSection title="Separate">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <table className="border-separate border-2 border-gray-500">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2 text-gray-800">
                  State
                </th>
                <th className="border border-gray-400 px-4 py-2 text-gray-800">
                  City
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Indiana</td>
                <td className="border border-gray-400 px-4 py-2">
                  Indianapolis
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Ohio</td>
                <td className="border border-gray-400 px-4 py-2">Columbus</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Michigan</td>
                <td className="border border-gray-400 px-4 py-2">Detroit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelSection>
    </div>
  );
}
