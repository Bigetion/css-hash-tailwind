import React from "react";

export default function PanelSection({ title, children }) {
  return (
    <div className="mt-4">
      <h1 className="text-2xl">{title}</h1>
      <div>{children}</div>
    </div>
  );
}
