import React from "react";
import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../MyForm";
import classes from "../MyForm.module.css";
type InputProps = {
  text: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  errors: FieldError | undefined;
};

const InputFileComponent = ({
  text,
  register,
  required,
  errors,
}: InputProps) => (
  <div>
    <label>
      Image:
      <input
        type="file"
        accept="image/jpeg,image/png,image/gif"
        {...register(text, { required })}
      />
    </label>
    <label>{errors && <span className={classes.error}>ERORR</span>}</label>
  </div>
);
export default InputFileComponent;
