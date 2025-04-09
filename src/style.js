import { twsx } from "tailwind_to_style";
import { cssHash } from "css_hash";

const styles = twsx({
  ".header": [
    "flex items-center",
    {
      h1: "text-3xl font-bold",
    },
  ],
  ".panel": [
    "mt-4",
    {
      h1: "text-xl text-gray-700 mb-2 font-medium",
      ".box":
        "rounded-lg overflow-hidden bg-slate-50 border bg-square relative",
    },
  ],
  ".box-decoration-break": [
    "grid grid-cols-1 sm:grid-cols-2 gap-10 px-10 font-bold mb-3",
    {
      "& > div": [
        "flex flex-col",
        {
          "& > p": "font-medium text-sm text-slate-500 font-mono mb-3",
          "& > div": [
            "text-5xl font-extrabold leading-none tracking-tight",
            {
              span: [
                "text-white from-indigo-600 to-pink-500 bg-gradient-to-r leading-10 px-2",
                {
                  "&.slice": "box-decoration-slice",
                  "&.clone": "box-decoration-clone",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  ".box-sizing": [
    "relative grid grid-cols-3 grid-rows-3 gap-px bg-slate-700 bg-opacity-10 font-mono text-sm font-bold leading-6 max-w-sm mx-auto w-full shadow-xl",
    {
      "& > *": "bg-white",
      "& > .c1": "col-start-1",
      "& > .c2": "col-start-2",
      "& > .c3": "col-start-3",
      "& > .r1": "row-start-1",
      "& > .r2": "row-start-2",
      "& > .r3": "row-start-3",
      "& > .center": [
        "w-32 h-32",
        {
          "&.include > *:first-child": [
            "box-border relative w-32 h-32 p-5 ring ring-sky-300 ring-inset",
            {
              "& > *:first-child":
                "w-full h-full bg-sky-500 ring-1 ring-sky-500",
            },
          ],
          "&.exclude > *:first-child": [
            "transform box-content -translate-x-5 -translate-y-5 relative w-32 h-32 p-5 ring-4 ring-blue-300 ring-inset",
            {
              "& > *:first-child":
                "w-full h-full bg-blue-500 ring-1 ring-blue-500",
            },
          ],
        },
      ],
      "& .size-line-top": [
        "relative",
        {
          "& > *:first-child": [
            "absolute flex bottom-2 left-0 right-0",
            {
              "& > .line-start": [
                "w-full",
                {
                  "& > div": [
                    "left-0 rounded-full h-2 bg-sky-400 w-px absolute",
                  ],
                },
              ],
              "& > .line-end": [
                "w-full",
                {
                  "& > div": [
                    "right-0 rounded-full h-2 bg-sky-400 w-px absolute",
                  ],
                },
              ],
            },
          ],
        },
      ],
      "& .size-line-left": [
        "relative",
        {
          "& > *:first-child": ["absolute flex right-2 top-0 bottom-0 w-3", {}],
        },
      ],
    },
  ],
});

cssHash(() => styles);
