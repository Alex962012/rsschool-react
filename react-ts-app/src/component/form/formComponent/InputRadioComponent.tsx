import React, { forwardRef, RefObject } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../MyForm";

import classes from "../MyForm.module.css";

type InputProps = {
  text: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const InputRadioComponent = ({ text, register, required }: InputProps) => (
  <div>
    <label>
      <input type="radio" value="men" {...register(text)} />
      ForMen
    </label>
    <label>
      <input type="radio" value="woman" {...register(text)} />
      ForWoman
    </label>
    {/* {!props.error && <span className={classes.error}>ERORR</span>} */}
  </div>
);
export default InputRadioComponent;
