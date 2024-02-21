import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function Display() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Display</h1>
      </div>
      <PanelSection title="Block & Inline" paddingless>
        <div className="mx-auto max-w-xs bg-white shadow-xl p-4 text-slate-500 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          When controlling the flow of text, using the CSS property{" "}
          <span className="inline bg-sky-100 font-bold text-sm text-slate-900 font-mono rounded dark:bg-slate-600 dark:text-slate-200">
            display: inline
          </span>{" "}
          will cause the text inside the element to wrap normally.
          <br />
          <br />
          While using the property{" "}
          <span className="inline-block bg-sky-100 font-bold text-sm text-slate-900 font-mono rounded dark:bg-slate-600 dark:text-slate-200">
            display: inline-block
          </span>{" "}
          will wrap the element to prevent the text inside from extending beyond
          its parent.
          <br />
          <br />
          Lastly, using the property{" "}
          <span className="block bg-sky-100 font-bold text-sm text-slate-900 font-mono rounded dark:bg-slate-600 dark:text-slate-200">
            {" "}
            display: block{" "}
          </span>{" "}
          will put the element on its own line and fill its parent.
        </div>
      </PanelSection>
      <PanelSection title="Flow Root" paddingless>
        <div className="mx-auto max-w-xs bg-white shadow-xl p-4 text-slate-500 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div className={`flow-root mb-1 ${stripes.purple}`}>
            <div className="my-4 bg-white dark:bg-slate-800">
              Well, let me tell you something, funny boy. Y'know that little
              stamp, the one that says "New York Public Library"? Well that may
              not mean anything to you, but that means a lot to me. One whole
              hell of a lot.
            </div>
          </div>
          <div className={`flow-root mt-1 ${stripes.purple}`}>
            <div className="my-4 bg-white dark:bg-slate-800">
              Sure, go ahead, laugh if you want to. I've seen your type before:
              Flashy, making the scene, flaunting convention. Yeah, I know what
              you're thinking. What's this guy making such a big stink about old
              library books? Well, let me give you a hint, junior.{" "}
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Flex" paddingless>
        <div className="mx-auto max-w-xs bg-white shadow-xl p-4 text-slate-500 leading-6 flex justify-center dark:bg-slate-800 dark:text-slate-400">
          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="flex flex-col">
              <strong className="text-slate-900 font-medium dark:text-slate-200">
                Andrew Alfred
              </strong>
              <span className="text-slate-500 font-medium dark:text-slate-400">
                Technical advisor
              </span>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Inline Flex" paddingless>
        <p className="mx-auto max-w-lg bg-white shadow-xl p-4 text-slate-500 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          Today I spent most of the day researching ways to take advantage of
          the fact that bottles can be returned for 10 cents in Michigan, but
          only 5 cents here.{" "}
          <span className="ml-1 inline-flex items-baseline">
            <img
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              alt=""
              className="self-center w-5 h-5 rounded-full mr-1"
            />
            <span className="font-medium text-slate-900 dark:text-slate-200">
              Kramer
            </span>
          </span>{" "}
          keeps telling me there is no way to make it work, that he has run the
          numbers on every possible approach, but I just have to believe there's
          a way to make it work, there's simply too much opportunity here.
        </p>
      </PanelSection>
      <PanelSection title="Grid">
        <div
          className={`grid grid-cols-3 grid-rows-3 gap-4 font-mono text-white text-sm font-bold leading-6 rounded-lg text-center ${stripes.fuchsia}`}
        >
          <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">01</div>
          <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">02</div>
          <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">03</div>
          <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">04</div>
          <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">05</div>
          <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">06</div>
          <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">07</div>
          <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">08</div>
          <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">09</div>
        </div>
      </PanelSection>
      <PanelSection title="Inline Grid">
        <div className="space-x-3 overflow-x-auto w-full whitespace-nowrap">
          <div
            className={`inline-grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6 rounded-lg text-center ${stripes.sky}`}
          >
            <div className="p-4 w-14 h-14 bg-sky-500 shadow-lg rounded-lg">
              01
            </div>
            <div className="p-4 w-14 h-14 bg-sky-500 shadow-lg rounded-lg">
              02
            </div>
            <div className="p-4 w-14 h-14 bg-sky-500 shadow-lg rounded-lg">
              03
            </div>
            <div className="p-4 w-14 h-14 bg-sky-500 shadow-lg rounded-lg">
              04
            </div>
            <div className="p-4 w-14 h-14 bg-sky-500 shadow-lg rounded-lg">
              05
            </div>
            <div className="p-4 w-14 h-14 bg-sky-500 shadow-lg rounded-lg">
              06
            </div>
          </div>
          <div
            className={`inline-grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6 rounded-lg text-center ${stripes.sky}`}
          >
            <div className="p-4 w-14 h-14 bg-sky-500 shadow-lg rounded-lg">
              01
            </div>
            <div className="p-4 w-14 h-14 bg-sky-500 shadow-lg rounded-lg">
              02
            </div>
            <div className="p-4 w-14 h-14 bg-sky-500 shadow-lg rounded-lg">
              03
            </div>
            <div className="p-4 w-14 h-14 bg-sky-500 shadow-lg rounded-lg">
              04
            </div>
            <div className="p-4 w-14 h-14 bg-sky-500 shadow-lg rounded-lg">
              05
            </div>
            <div className="p-4 w-14 h-14 bg-sky-500 shadow-lg rounded-lg">
              06
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Contents">
        <div
          className={`flex gap-4 font-mono text-white text-sm font-bold leading-6 ${stripes.purple} rounded-lg text-center`}
        >
          <div className="flex-1 p-4 bg-purple-500 shadow-lg rounded-lg">
            01
          </div>
          <div className="contents">
            <div className="flex-1 p-4 bg-purple-500 shadow-lg rounded-lg">
              02
            </div>
            <div className="flex-1 p-4 bg-purple-500 shadow-lg rounded-lg">
              03
            </div>
          </div>
          <div className="flex-1 p-4 bg-purple-500 shadow-lg rounded-lg">
            04
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Table" paddingless>
        <div className="shadow-sm overflow-hidden my-8">
          <div className="table border-collapse table-auto w-full text-sm">
            <div className="table-header-group">
              <div className="table-row">
                <div className="table-cell border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Song
                </div>
                <div className="table-cell border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Artist
                </div>
                <div className="table-cell border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Year
                </div>
              </div>
            </div>
            <div className="table-row-group bg-white dark:bg-slate-800">
              <div className="table-row">
                <div className="table-cell border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </div>
                <div className="table-cell border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                  Malcolm Lockyer
                </div>
                <div className="table-cell border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  1961
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  Witchy Woman
                </div>
                <div className="table-cell border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                  The Eagles
                </div>
                <div className="table-cell border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  1972
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  Shining Star
                </div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400">
                  Earth, Wind, and Fire
                </div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  1975
                </div>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Hidden">
        <div
          className={`flex gap-4 font-mono text-white text-sm font-bold leading-6 ${stripes.purple} rounded-lg text-center`}
        >
          <div className="hidden p-4 w-14 h-14 bg-purple-500 shadow-lg rounded-lg">
            01
          </div>
          <div className="p-4 w-14 h-14 bg-purple-500 shadow-lg rounded-lg">
            02
          </div>
          <div className="p-4 w-14 h-14 bg-purple-500 shadow-lg rounded-lg">
            03
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
