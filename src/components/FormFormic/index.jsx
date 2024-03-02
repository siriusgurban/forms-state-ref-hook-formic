import React, { useState } from "react";
import { useFormik } from "formik";

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const initialValues = {
  firstName: "",
  email: "",
  age: "",
};

function FormFormic({ context, innerRef }) {
  const [data, setData] = useState([]);

  const formik = useFormik({
    initialValues,
    onSubmit: crtProduct,
    validationSchema: SignupSchema,
  });

  function crtProduct(data1) {
    console.log("data----", data1);
    setData([...data, data1]);
    formik.resetForm();
  }

  return (
    <div className="mx-auto flex justify-center flex-col align-middle gap-2 bg-green-400 p-2 w-8/12 border-solid rounded-xl">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <input
          name="firstName"
          placeholder="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <input
          name="age"
          placeholder="age"
          onChange={formik.handleChange}
          value={formik.values.age}
          className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <input
          name="email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        {formik.errors.email && (
          <span className="text-center">{formik.errors.email}</span>
        )}

        <button
          type="submit"
          className="text-center mx-auto flex justify-center rounded-full bg-green-200 px-2 text-xl ring-2 ring-purple-500"
        >
          {context}
        </button>
        <ul className="flex justify-center flex-col  bg-green-400 text-xl mx-5 rounded-xl">
          {data?.map((el, index) => {
            return (
              <li key={"hook" + index} className="text-center">
                <span>
                  {index + 1}) f-name:{el.firstName}, @:{el.email}, age:
                  {el.age}
                </span>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}

export default FormFormic;
