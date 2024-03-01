import React from "react";
import { useForm } from "react-hook-form";

import Input from "../Input";
import Button from "../Button";

function FormState({ context }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="mx-auto flex justify-center flex-col align-middle gap-2 bg-green-400 p-2 w-8/12 border-solid rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Name"
          defaultValue="test"
          {...register("example")}
        />

        <Input
          placeholder="Email"
          {...register("exampleRequired", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <Button type="submit" context={context} />
      </form>
    </div>
  );
}

export default FormState;
