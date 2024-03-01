import React from "react";

function FormDiv({ bg, text, children }) {
  return (
    <div
      className={`w-1/2 text-3xl overflow-auto ${bg} ${text}`}
      style={{ height: "50vh" }}
    >
      {children}
    </div>
  );
}

export default FormDiv;
