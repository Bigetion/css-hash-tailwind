import React from "react";

import PanelSection from "components/PanelSection";

export default function CaptionSide() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Caption Side</h1>
      </div>
      <PanelSection title="Top" paddingless>
        <div className="shadow-sm overflow-hidden px-4 py-8 sm:px-8">
          <table className="border-collapse table-auto w-full text-sm">
            <caption className="text-slate-500 pb-4 text-xs caption-top">
              Table 3.1: Professional wrestlers and their signature moves.
            </caption>
            <thead>
              <tr>
                <th className="border font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 text-left">
                  Wrestler
                </th>
                <th className="border font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 text-left">
                  Signature Move(s)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-slate-200 p-4 pl-8 text-slate-500">
                  "Stone Cold" Steve Austin
                </td>
                <td className="border border-slate-200 p-4 pr-8 text-slate-500">
                  Stone Cold Stunner, Lou Thesz Press
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-4 pl-8 text-slate-500">
                  Bret "The Hitman" Hart
                </td>
                <td className="border border-slate-200 p-4 pr-8 text-slate-500">
                  The Sharpshooter
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-4 pl-8 text-slate-500">
                  Razor Ramon
                </td>
                <td className="border border-slate-200 p-4 pr-8 text-slate-500">
                  Razor's Edge, Fallaway Slam
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelSection>
      <PanelSection title="Bottom" paddingless>
        <div className="shadow-sm overflow-hidden px-4 py-8 sm:px-8">
          <table className="border-collapse table-auto w-full text-sm">
            <caption className="text-slate-500 pt-4 text-xs caption-bottom">
              Table 3.1: Professional wrestlers and their signature moves.
            </caption>
            <thead>
              <tr>
                <th className="border font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 text-left">
                  Wrestler
                </th>
                <th className="border font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 text-left">
                  Signature Move(s)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-slate-200 p-4 pl-8 text-slate-500">
                  "Stone Cold" Steve Austin
                </td>
                <td className="border border-slate-200 p-4 pr-8 text-slate-500">
                  Stone Cold Stunner, Lou Thesz Press
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-4 pl-8 text-slate-500">
                  Bret "The Hitman" Hart
                </td>
                <td className="border border-slate-200 p-4 pr-8 text-slate-500">
                  The Sharpshooter
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-4 pl-8 text-slate-500">
                  Razor Ramon
                </td>
                <td className="border border-slate-200 p-4 pr-8 text-slate-500">
                  Razor's Edge, Fallaway Slam
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelSection>
    </div>
  );
}
