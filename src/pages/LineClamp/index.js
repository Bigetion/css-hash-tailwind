import React from "react";

import PanelSection from "components/PanelSection";

export default function LineClamp() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Line Clamp</h1>
      </div>
      <PanelSection title="Truncating multi-line text" paddingless>
        <article className="mx-auto max-w-sm bg-white p-8 text-sm leading-6 text-slate-700 shadow-xl dark:bg-slate-800 dark:text-slate-400 sm:text-base sm:leading-7">
          <time
            dateTime="2020-03-16"
            className="block text-sm leading-6 text-slate-500 dark:text-slate-400"
          >
            Mar 10, 2020
          </time>
          <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-200">
            Boost your conversion rate
          </h2>
          <p className="line-clamp-3 mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
            occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
            occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu
            dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut
            cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure
            quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad
            sint voluptate sunt elit mollit officia ad enim sit consectetur
            enim.
          </p>
          <div className="mt-4 flex gap-x-2.5 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200">
            <img
              className="h-6 w-6 flex-none rounded-full bg-slate-50 dark:bg-slate-900 mr-3"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span>Lindsay Walton</span>
          </div>
        </article>
      </PanelSection>
    </div>
  );
}
