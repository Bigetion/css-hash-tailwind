import React from "react";

import PanelSection from "components/PanelSection";

export default function BorderCollapse() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Border Collapse</h1>
      </div>
      <PanelSection title="Collapse" paddingless>
        <div className="px-4 py-8 sm:px-8">
          <table className="border-collapse w-full border border-slate-400 bg-white text-sm shadow-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="w-1/2 border border-slate-300 font-semibold p-4 text-slate-900 text-left">
                  State
                </th>
                <th className="w-1/2 border border-slate-300 font-semibold p-4 text-slate-900 text-left">
                  City
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-4 text-slate-500">
                  Indiana
                </td>
                <td className="border border-slate-300 p-4 text-slate-500">
                  Indianapolis
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-4 text-slate-500">
                  Ohio
                </td>
                <td className="border border-slate-300 p-4 text-slate-500">
                  Columbus
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-4 text-slate-500">
                  Michigan
                </td>
                <td className="border border-slate-300 p-4 text-slate-500">
                  Detroit
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelSection>
      <PanelSection title="Separate" paddingless>
        <div className="px-4 py-8 sm:px-8">
          <table className="border-separate w-full border border-slate-400 bg-white text-sm shadow-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="w-1/2 border border-slate-300 font-semibold p-4 text-slate-900 text-left">
                  State
                </th>
                <th className="w-1/2 border border-slate-300 font-semibold p-4 text-slate-900 text-left">
                  City
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-4 text-slate-500">
                  Indiana
                </td>
                <td className="border border-slate-300 p-4 text-slate-500">
                  Indianapolis
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-4 text-slate-500">
                  Ohio
                </td>
                <td className="border border-slate-300 p-4 text-slate-500">
                  Columbus
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-4 text-slate-500">
                  Michigan
                </td>
                <td className="border border-slate-300 p-4 text-slate-500">
                  Detroit
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelSection>
    </div>
  );
}
