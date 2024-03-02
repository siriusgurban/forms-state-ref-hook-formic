import React, { useState, useRef } from "react";

function FormRef({ context, innerRef }) {
  const [text, setText] = useState("");
  const [form, setForm] = useState([]);

  const inputRef = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  console.log("inputRef", inputRef);

  function handleSearch(e) {
    const value = e.target.value;
    setText(value);
  }

  function handleSubmit() {
    console.log("text", text);

    // el.value = ""
    setText("");

    console.log("inputRef", inputRef);

    // inputRef.current?.focus();
    inputRef.current?.blur();

    console.log(inputRef.current.value);
    console.log(inputRef2.current.value);
    console.log(inputRef3.current.value);

    let data = {
      search: inputRef.current.value,
      fullname: inputRef2.current.value,
      age: inputRef3.current.value,
    };

    setForm([...form, data]);

    inputRef.current.value = "";
    inputRef2.current.value = "";
    inputRef3.current.value = "";
  }

  return (
    <div className="flex flex-col gap-2">
      {/* For Search Area */}
      {/* <input
        placeholder="Search"
        value={text}
        onChange={handleSearch}
        className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <h5 className="text-xl text-center">{text.length}/100</h5> */}
      {/* <h6 className="text-xl text-center">
        {text.length < 10 ? "Asagi guvenlik" : "Parol eladir!"}
      </h6> */}
      {/* For Search Area with Ref */}
      <input
        ref={inputRef}
        placeholder="Search"
        className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <input
        ref={inputRef2}
        placeholder="fullname"
        className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <input
        ref={inputRef3}
        placeholder="age"
        className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <button
        onClick={handleSubmit}
        className="text-center mx-auto flex justify-center rounded-full bg-green-200 px-2 text-xl ring-2 ring-purple-500"
      >
        Send as Ref
      </button>
      <ul className="flex justify-center flex-col  bg-green-400 text-xl mx-5 rounded-xl">
        {form?.map((el, index) => {
          return (
            <li key={"hook" + index} className="text-center">
              <span>
                {index + 1}) f-name:{el.fullname}, age:{el.age}, search:
                {el.search}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FormRef;
