import React, { forwardRef } from "react";
import  { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import { IFormValues } from "../MyForm";
import classes from "../MyForm.module.css";


type InputProps = {
  text: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  type:string
};


const InputComponent =({ text, register, required,type }: InputProps)=> (
  <div>
    <label>{text}</label>
    <input {...register( text, { required })} type={type} />
    <label>
      {/* {!props.error && <span className={classes.error}>ERORR</span>} */}
    </label>
  </div>
);
export default InputComponent;
