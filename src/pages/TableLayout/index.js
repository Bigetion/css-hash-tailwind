import React from "react";

import PanelSection from "components/PanelSection";

export default function TableLayout() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Table Layout</h1>
      </div>
      <PanelSection title="Auto" paddingless>
        <div className="shadow-sm overflow-hidden my-8">
          <table className="border-collapse table-auto w-full text-sm">
            <thead>
              <tr>
                <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
                  Song
                </th>
                <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
                  Artist
                </th>
                <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                  Year
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  Malcolm Lockyer
                </td>
                <td className="border-b border-slate-100 p-4 pr-8 text-slate-500">
                  1961
                </td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
                  Witchy Woman
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  The Eagles
                </td>
                <td className="border-b border-slate-100 p-4 pr-8 text-slate-500">
                  1972
                </td>
              </tr>
              <tr>
                <td className="border-b border-slate-200 p-4 pl-8 text-slate-500">
                  Shining Star
                </td>
                <td className="border-b border-slate-200 p-4 text-slate-500">
                  Earth, Wind, and Fire
                </td>
                <td className="border-b border-slate-200 p-4 pr-8 text-slate-500">
                  1975
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelSection>
      <PanelSection title="Fixed" paddingless>
        <div className="shadow-sm overflow-hidden my-8">
          <table className="border-collapse table-fixed w-full text-sm">
            <thead>
              <tr>
                <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
                  Song
                </th>
                <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
                  Artist
                </th>
                <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                  Year
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  Malcolm Lockyer
                </td>
                <td className="border-b border-slate-100 p-4 pr-8 text-slate-500">
                  1961
                </td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
                  Witchy Woman
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  The Eagles
                </td>
                <td className="border-b border-slate-100 p-4 pr-8 text-slate-500">
                  1972
                </td>
              </tr>
              <tr>
                <td className="border-b border-slate-200 p-4 pl-8 text-slate-500">
                  Shining Star
                </td>
                <td className="border-b border-slate-200 p-4 text-slate-500">
                  Earth, Wind, and Fire
                </td>
                <td className="border-b border-slate-200 p-4 pr-8 text-slate-500">
                  1975
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelSection>
    </div>
  );
}
