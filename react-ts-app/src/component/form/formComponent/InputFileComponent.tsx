import React, { forwardRef } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../MyForm";

type InputProps = {
  text: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const InputFileComponent = ({ text, register, required }: InputProps) => (
  <div>
    <label>
      Image:
      <input type="file" accept="image/jpeg,image/png,image/gif"  {...register(text)} />
    </label>
  </div>
);
export default InputFileComponent;
