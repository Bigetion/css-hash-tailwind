import React from "react";

import PanelSection from "components/PanelSection";

export default function Position() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Position</h1>
      </div>
      <PanelSection title="Statically positioning elements">
        <div className="relative text-sm font-medium leading-6">
          <div className="bg-purple-400 bg-opacity-20 border border-purple-700 border-opacity-10 rounded-lg p-4 dark:bg-sky-900/70 dark:border-0">
            <div className="static bg-purple-400 bg-opacity-20 border border-purple-700 border-opacity-10 p-4 h-32 dark:bg-sky-400/20 dark:border-0">
              <p className="text-purple-700 dark:text-sky-200">Static parent</p>
              <div className="absolute bottom-0 left-0 bg-purple-500 shadow-lg rounded-lg p-4 text-white dark:bg-sky-500">
                <p>Absolute child</p>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Relatively positioning elements">
        <div className="relative text-sm font-medium leading-6">
          <div className="bg-sky-400 bg-opacity-20 border border-sky-700 border-opacity-10 rounded-lg p-4 dark:bg-blue-900/70 dark:border-0">
            <div className="relative bg-sky-400 bg-opacity-20 border border-sky-700 border-opacity-10 p-4 h-32 dark:bg-blue-400/20 dark:border-0">
              <p className="text-sky-700 dark:text-white">Relative parent</p>
              <div className="absolute bottom-0 left-0 bg-sky-500 shadow-lg rounded-lg p-4 text-white dark:bg-blue-500">
                <p>Absolute child</p>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Absolutely positioning elements">
        <div className="relative rounded-xl overflow-auto p-8">
          <div className="space-y-8">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-4">
                With static positioning
              </p>
              <div className="relative text-sm font-medium leading-6">
                <div className="relative bg-indigo-400 bg-opacity-20 border border-indigo-700 border-opacity-10 rounded-lg p-4 dark:bg-indigo-900/80 dark:border-0">
                  <p className="text-indigo-700 -mt-2 mb-2 dark:text-indigo-200">
                    Relative parent
                  </p>
                  <div className="static bg-indigo-400 bg-opacity-20 border border-indigo-700 border-opacity-10 p-4 h-32 flex flex-col justify-between dark:border-0">
                    <p className="text-indigo-700 dark:text-indigo-200">
                      Static parent
                    </p>
                    <div className="flex gap-4">
                      <div className=" bottom-0 left-0 bg-indigo-500 shadow-lg rounded-lg p-4 text-white">
                        <p>Static child</p>
                      </div>
                      <div className="bg-indigo-100 shadow-lg rounded-lg p-4 text-indigo-600">
                        <p>Static sibling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium mb-4">
                With absolute positioning
              </p>
              <div className="relative text-sm font-medium leading-6">
                <div className="relative bg-indigo-400 bg-opacity-20 border-indigo-700 border-opacity-10 rounded-lg p-4 dark:bg-indigo-900/80 dark:border-0">
                  <p className="text-indigo-700 -mt-2 mb-2 dark:text-indigo-200">
                    Relative parent
                  </p>
                  <div className="static bg-indigo-400 bg-opacity-20 border-indigo-700 border-opacity-10 p-4 h-32 flex flex-col justify-between dark:border-0">
                    <p className="text-indigo-700 dark:text-indigo-200">
                      Static parent
                    </p>
                    <div className="flex gap-4">
                      <div className="absolute top-0 right-0 bg-indigo-500 shadow-lg rounded-lg p-4 text-white">
                        <p>Absolute child</p>
                      </div>
                      <div className="bg-indigo-100 shadow-lg rounded-lg p-4 text-indigo-600">
                        <p>Static sibling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Fixed positioning elements">
        <div className="relative max-w-md mx-auto bg-white dark:bg-slate-800 shadow-lg h-80 overflow-hidden ring-1 ring-slate-900/5">
          <div className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50 bg-opacity-90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900 ring-opacity-10 dark:ring-black/10">
            Contacts
          </div>
          <div className="overflow-auto flex flex-col divide-y h-80 dark:divide-slate-200/5">
            <div className="flex items-center gap-4 p-4">
              <img
                alt=""
                className="w-12 h-12 rounded-full"
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Andrew Alfred
              </strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                alt=""
                className="w-12 h-12 rounded-full"
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Debra Houston
              </strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                alt=""
                className="w-12 h-12 rounded-full"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Jane White
              </strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                alt=""
                className="w-12 h-12 rounded-full"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Ray Flint
              </strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                alt=""
                className="w-12 h-12 rounded-full"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Mindy Albrect
              </strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                alt=""
                className="w-12 h-12 rounded-full"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                David Arnold
              </strong>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Sticky">
        <div className="relative max-w-md mx-auto bg-white dark:bg-slate-800 shadow-lg h-80 overflow-auto ring-1 ring-slate-900/5 -my-px">
          <div className="relative">
            <div className="sticky top-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50 bg-opacity-90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900 ring-opacity-10 dark:ring-black/10">
              A
            </div>
            <div className="divide-y dark:divide-slate-200/5">
              <div className="flex items-center gap-4 p-4">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Andrew Alfred
                </strong>
              </div>
              <div className="flex items-center gap-4 p-4">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Aisha Houston
                </strong>
              </div>
              <div className="flex items-center gap-4 p-4">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Anna White
                </strong>
              </div>
              <div className="flex items-center gap-4 p-4">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Andy Flint
                </strong>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="sticky top-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50 bg-opacity-90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900 ring-opacity-10 dark:ring-black/10">
              B
            </div>
            <div className="divide-y dark:divide-slate-200/5">
              <div className="flex items-center gap-4 p-4">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Bob Alfred
                </strong>
              </div>
              <div className="flex items-center gap-4 p-4">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Bianca Houston
                </strong>
              </div>
              <div className="flex items-center gap-4 p-4">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Brianna White
                </strong>
              </div>
              <div className="flex items-center gap-4 p-4">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Bert Flint
                </strong>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="sticky top-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50 bg-opacity-90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900 ring-opacity-10 dark:ring-black/10">
              C
            </div>
            <div className="divide-y dark:divide-slate-200/5">
              <div className="flex items-center gap-4 p-4">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Colton Alfred
                </strong>
              </div>
              <div className="flex items-center gap-4 p-4">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Cynthia Houston
                </strong>
              </div>
              <div className="flex items-center gap-4 p-4">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Cheyenne White
                </strong>
              </div>
              <div className="flex items-center gap-4 p-4">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                />
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Charlie Flint
                </strong>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
