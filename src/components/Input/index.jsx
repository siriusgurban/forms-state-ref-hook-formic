import React, { useState } from "react";

function Input({ placeholder, props }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      {...props}
      type="text"
      name="price"
      id="price"
      className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

export default Input;
