import React from "react";
import { Path, UseFormRegister, FieldError } from "react-hook-form";
import { IFormValues } from "../MyForm";

import classes from "../MyForm.module.css";

type InputProps = {
  text: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  errors: FieldError | undefined;
};

const InputRadioComponent = ({
  text,
  register,
  required,
  errors,
}: InputProps) => (
  <div>
    <label>
      <input type="radio" value="men" {...register(text, { required })} />
      ForMen
    </label>
    <label>
      <input type="radio" value="woman" {...register(text, { required })} />
      ForWoman
    </label>
    {errors && <span className={classes.error}>ERORR</span>}
  </div>
);
export default InputRadioComponent;
