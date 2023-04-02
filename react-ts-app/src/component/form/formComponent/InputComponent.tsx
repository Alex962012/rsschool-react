import React from "react";
import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../MyForm";
import classes from "../MyForm.module.css";

type InputProps = {
  text: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  type: string;
  errors: FieldError | undefined;
};

const InputComponent = ({
  text,
  register,
  required,
  type,
  errors,
}: InputProps) => (
  <div>
    <label>{text}</label>
    <input {...register(text, { required })} type={type} />
    <label>{errors && <span className={classes.error}>ERORR</span>}</label>
  </div>
);
export default InputComponent;
