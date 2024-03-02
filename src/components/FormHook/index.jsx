import React, { useState } from "react";
import { useForm } from "react-hook-form";

function FormHook({ context }) {
  const [data, setData] = useState([]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data1) => {
    setData([...data, data1]);
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <input
        type="text"
        name="firstName"
        id="price"
        className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        {...register("firstName")}
        placeholder="firstName"
      />
      <input
        type="text"
        name="lastName"
        id="price"
        className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        {...register("lastName", { required: true })}
        placeholder="lastName"
      />
      {errors.lastName && (
        <p className=" text-center">Last name is required.</p>
      )}
      <input
        type="text"
        name="age"
        id="price"
        className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        {...register("age", { pattern: /\d+/ })}
        placeholder="age"
      />
      {errors.age && (
        <p className="text-center">Please enter number for age.</p>
      )}
      <input
        type="submit"
        className="text-center mx-auto flex justify-center rounded-full bg-green-200 px-2 text-xl ring-2 ring-purple-500"
      />
      <ul className="flex justify-center flex-col  bg-green-400 text-xl mx-5 rounded-xl">
        {data.map((el, index) => {
          return (
            <li key={"hook" + index} className="text-center">
              <span>
                {index + 1}) f-name:{el.firstName}, l-name:{el.lastName}, age:
                {el.age}
              </span>
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default FormHook;
