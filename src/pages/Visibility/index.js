import React from "react";

import PanelSection from "components/PanelSection";

export default function Visibility() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Visibility</h1>
      </div>
      <PanelSection title="Making elements invisible">
        <div className="grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6">
          <div className="p-4 flex items-center justify-center bg-cyan-500 shadow-lg rounded-lg">
            01
          </div>
          <div className="invisible p-4 flex items-center justify-center bg-cyan-500 shadow-lg rounded-lg">
            02
          </div>
          <div className="p-4 flex items-center justify-center bg-cyan-500 shadow-lg rounded-lg">
            03
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Collapsing elements" paddingless>
        <div className="py-8">
          <div className="mb-3 pl-4 text-sm font-medium text-slate-500">
            Showing all rows
          </div>
          <table className="border-collapse w-full border-y border-slate-400 bg-white text-sm shadow-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="border first:border-l-0 last:border-r-0 border-slate-300 font-semibold px-4 py-3 text-slate-900 text-left">
                  Invoice #
                </th>
                <th className="border first:border-l-0 last:border-r-0 border-slate-300 font-semibold px-4 py-3 text-slate-900 text-left">
                  Client
                </th>
                <th className="border first:border-l-0 last:border-r-0 border-slate-300 font-semibold px-4 py-3 text-slate-900 text-right">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  #100
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  Pendant Publishing
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500 text-right tabular-nums">
                  $2,000.00
                </td>
              </tr>
              <tr>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  #101
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  Kruger Industrial Smoothing
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500 text-right tabular-nums">
                  $545.00
                </td>
              </tr>
              <tr>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  #102
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  J. Peterman
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500 text-right tabular-nums">
                  $10,000.25
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-10 mb-3 pl-4 text-sm font-medium text-slate-500">
            Hiding a row using{" "}
            <code className="text-xs text-slate-700">`collapse`</code>
          </div>
          <table className="border-collapse w-full border-y border-slate-400 bg-white text-sm shadow-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="border first:border-l-0 last:border-r-0 border-slate-300 font-semibold px-4 py-3 text-slate-900 text-left">
                  Invoice #
                </th>
                <th className="border first:border-l-0 last:border-r-0 border-slate-300 font-semibold px-4 py-3 text-slate-900 text-left">
                  Client
                </th>
                <th className="border first:border-l-0 last:border-r-0 border-slate-300 font-semibold px-4 py-3 text-slate-900 text-right">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  #100
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  Pendant Publishing
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500 text-right tabular-nums">
                  $2,000.00
                </td>
              </tr>
              <tr className="collapse">
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  #101
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  Kruger Industrial Smoothing
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500 text-right tabular-nums">
                  $545.00
                </td>
              </tr>
              <tr>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  #102
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  J. Peterman
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500 text-right tabular-nums">
                  $10,000.25
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-10 mb-3 pl-4 text-sm font-medium text-slate-500">
            Hiding a row using{" "}
            <code className="text-xs text-slate-700">`hidden`</code>
          </div>
          <table className="border-collapse w-full border-y border-slate-400 bg-white text-sm shadow-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="border first:border-l-0 last:border-r-0 border-slate-300 font-semibold px-4 py-3 text-slate-900 text-left">
                  Invoice #
                </th>
                <th className="border first:border-l-0 last:border-r-0 border-slate-300 font-semibold px-4 py-3 text-slate-900 text-left">
                  Client
                </th>
                <th className="border first:border-l-0 last:border-r-0 border-slate-300 font-semibold px-4 py-3 text-slate-900 text-right">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  #100
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  Pendant Publishing
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500 text-right tabular-nums">
                  $2,000.00
                </td>
              </tr>
              <tr className="hidden">
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  #101
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  Kruger Industrial Smoothing
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500 text-right tabular-nums">
                  $545.00
                </td>
              </tr>
              <tr>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  #102
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500">
                  J. Peterman
                </td>
                <td className="border first:border-l-0 last:border-r-0 border-slate-300 px-4 py-3 text-slate-500 text-right tabular-nums">
                  $10,000.25
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelSection>
      <PanelSection title="Making elements visible">
        <div className="grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6">
          <div className="p-4 flex items-center justify-center bg-fuchsia-500 shadow-lg rounded-lg">
            01
          </div>
          <div className="visible p-4 flex items-center justify-center bg-fuchsia-500 shadow-lg rounded-lg">
            02
          </div>
          <div className="p-4 flex items-center justify-center bg-fuchsia-500 shadow-lg rounded-lg">
            03
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
