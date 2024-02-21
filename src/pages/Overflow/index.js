import React from "react";

import PanelSection from "components/PanelSection";

export default function Overflow() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Overflow</h1>
      </div>
      <PanelSection title="Showing content that overflows">
        <div className="overflow-visible relative max-w-sm mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
          <img
            alt=""
            className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
          />
          <div className="flex flex-col py-5 pl-24">
            <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
              Andrew Alfred
            </strong>
            <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
              Technical advisor
            </span>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Hiding content that overflows">
        <div className="overflow-hidden relative max-w-sm mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
          <img
            alt=""
            className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
          />
          <div className="flex flex-col py-5 pl-24">
            <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
              Andrew Alfred
            </strong>
            <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
              Technical advisor
            </span>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Scrolling if needed">
        <div className="overflow-auto h-72 relative max-w-sm mx-auto bg-white dark:bg-slate-800 dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Andrew Alfred
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Technical advisor
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Debra Houston
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Analyst
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Jane White
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Director, Marketing
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Ray Flint
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Technical Advisor
              </span>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Scrolling horizontally if needed" paddingless>
        <div className="max-w-md mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5">
          <div className="overflow-x-auto flex">
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  alt=""
                  className="w-18 h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                  Andrew
                </strong>
              </div>
            </div>
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  alt=""
                  className="w-18 h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                  Emily
                </strong>
              </div>
            </div>
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  alt=""
                  className="w-18 h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                  Whitney
                </strong>
              </div>
            </div>
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  alt=""
                  className="w-18 h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                  David
                </strong>
              </div>
            </div>
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  alt=""
                  className="w-18 h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                  Kristin
                </strong>
              </div>
            </div>
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  alt=""
                  className="w-18 h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                  Sarah
                </strong>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Scroll vertically if needed">
        <div className="overflow-y-auto h-72 relative max-w-sm mx-auto bg-white dark:bg-slate-800 dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Andrew Alfred
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Technical advisor
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Debra Houston
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Analyst
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Jane White
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Director, Marketing
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Ray Flint
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Technical Advisor
              </span>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Scrolling horizontally always" paddingless>
        <div className="max-w-md mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5">
          <div className="overflow-x-scroll flex">
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  alt=""
                  className="w-18 h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                  Andrew
                </strong>
              </div>
            </div>
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  alt=""
                  className="w-18 h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                  Emily
                </strong>
              </div>
            </div>
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  alt=""
                  className="w-18 h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                  Whitney
                </strong>
              </div>
            </div>
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  alt=""
                  className="w-18 h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                  David
                </strong>
              </div>
            </div>
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  alt=""
                  className="w-18 h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                  Kristin
                </strong>
              </div>
            </div>
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  alt=""
                  className="w-18 h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                  Sarah
                </strong>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Scroll vertically always">
        <div className="overflow-y-scroll h-72 relative max-w-sm mx-auto bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Andrew Alfred
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Technical advisor
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Debra Houston
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Analyst
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Jane White
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Director, Marketing
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Ray Flint
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Technical Advisor
              </span>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
