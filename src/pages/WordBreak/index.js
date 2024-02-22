import React from "react";

import PanelSection from "components/PanelSection";

export default function WordBreak() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Word Break</h1>
      </div>
      <PanelSection title="Normal" paddingless>
        <div className="mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-500">
          <p className="break-normal">
            The longest word in any of the major English language dictionaries
            is{" "}
            <span className="text-slate-900 font-medium">
              pneumonoultramicroscopicsilicovolcanoconiosis,
            </span>{" "}
            a word that refers to a lung disease contracted from the inhalation
            of very fine silica particles, specifically from a volcano;
            medically, it is the same as silicosis.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Break Words" paddingless>
        <div className="mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-500">
          <p className="break-words">
            The longest word in any of the major English language dictionaries
            is{" "}
            <span className="text-slate-900 font-medium">
              pneumonoultramicroscopicsilicovolcanoconiosis,
            </span>{" "}
            a word that refers to a lung disease contracted from the inhalation
            of very fine silica particles, specifically from a volcano;
            medically, it is the same as silicosis.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Break All" paddingless>
        <div className="mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-500">
          <p className="break-all">
            The longest word in any of the major English language dictionaries
            is{" "}
            <span className="text-slate-900 font-medium">
              pneumonoultramicroscopicsilicovolcanoconiosis,
            </span>{" "}
            a word that refers to a lung disease contracted from the inhalation
            of very fine silica particles, specifically from a volcano;
            medically, it is the same as silicosis.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Break Keep" paddingless>
        <div className="mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-500">
          <p className="break-keep">
            抗衡不屈不挠 (kànghéng bùqū bùnáo)
            这是一个长词，意思是不畏强暴，奋勇抗争，坚定不移，永不放弃。{" "}
            <span className="text-slate-900 font-medium">
              这个词通常用来描述那些在面对困难和挑战时坚持自己信念的人，
            </span>{" "}
            他们克服一切困难，不屈不挠地追求自己的目标。无论遇到多大的挑战，他们都能够坚持到底，不放弃，最终获得胜利。
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
