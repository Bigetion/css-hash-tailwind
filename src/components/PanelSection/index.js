import React from "react";
import { cssHash, classNames } from "css-hash";

const bgClass = cssHash(
  (className) => `
    .${className}: {
      background-image: linear-gradient(#1c7cbb 1.5px, transparent 1.5px, transparent calc(100% - 1.5px), #1c7cbb calc(100% - 1.5px)), linear-gradient(90deg, #1c7cbb 1.5px, transparent 1.5px, transparent calc(100% - 1.5px), #1c7cbb calc(100% - 1.5px));
      background-size: 10% 10%;
      border: 1.5px solid #1c7cbb;
    }
  `
);

export default function PanelSection({ title, children }) {
  return (
    <div className="mt-4">
      <h1 className="text-xl text-gray-700 mb-2">{title}</h1>
      <div
        className={classNames(
          "rounded-lg overflow-hidden bg-slate-50 p-4 border",
          bgClass
        )}
      >
        {children}
      </div>
    </div>
  );
}
