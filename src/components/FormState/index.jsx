import React from "react";
import { useState } from "react";

const initialForm = {
  fullname: "",
  password: "",
  email: "",
  sallary: "",
};

function FormState() {
  const [employees, setEmployees] = useState([]);

  const handlePersonal = (personal) => {
    console.log("personal", personal);

    const newData = [...employees, personal];
    setEmployees(newData);
  };

  const [form, setForm] = useState(initialForm);
  const [newForm1, setNewForm1] = useState([]);

  const [showPassword, setShowPassword] = useState(false);

  //   const disableBtn = !fullname.trim().length || !email.trim().length;

  function handleSubmit() {
    console.log("form", form);

    form.id = (Math.random() * Date.now()).toString();
    console.log(form);
    setNewForm1([...newForm1, form]);
    setForm(initialForm);
  }

  console.log('"showPassword', showPassword);

  const handleFormChange = (e) => {
    const dynamicName = e.target.name;
    const dynamicValue = e.target.value;

    let newForm = { ...form };

    newForm[dynamicName] = dynamicValue;

    console.log("newForm", newForm);

    setForm(newForm);
  };

  // const handleShowPassword = () => {
  //   setShowPassword((prev) => !prev);
  // };

  console.log("");

  return (
    <div className="flex flex-col gap-2">
      {console.log(newForm1)}
      <input
        className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={form?.fullname}
        placeholder="Fullname"
        name="fullname"
        onChange={handleFormChange}
      />

      {!form?.fullname?.trim()?.length && (
        <span className="text-xl text-center"> Bura bos ola bilmez</span>
      )}

      <input
        id="1"
        className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={form?.email}
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleFormChange}
      />

      <input
        id="2"
        className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={form?.sallary}
        placeholder="Salary"
        name="sallary"
        onChange={handleFormChange}
      />

      <input
        id="3"
        className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={form?.password}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        name="password"
        onChange={handleFormChange}
      />

      <button
        className="text-center mx-auto flex justify-center rounded-full bg-green-200 px-2 text-xl ring-2 ring-purple-500"
        onClick={handleSubmit}
      >
        Send as State
      </button>
      <ul className="flex justify-center flex-col  bg-green-400 text-xl mx-5 rounded-xl">
        {newForm1?.map((el, index) => {
          return (
            <li key={"hook" + index} className="text-center">
              <span>
                {index + 1}) f-name:{el.fullname}, @:{el.email}, sallary:
                {el.sallary}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FormState;
