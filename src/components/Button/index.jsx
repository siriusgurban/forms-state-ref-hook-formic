import React from "react";

function Button({ context }) {
  return (
    <div>
      <button className="mx-auto flex justify-center rounded-full bg-green-200 px-2 text-xl ring-2 ring-purple-500">
        {context}
      </button>
    </div>
  );
}

export default Button;
