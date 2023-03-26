import React, { forwardRef } from "react";
import classes from '../MyForm.module.css'
type MyProps = {
  type: string;
  text: string;
  error: boolean;
};


const InputComponent = forwardRef<HTMLInputElement, MyProps>((props, ref) => (
  <div>
    
    <label>{props.text}</label>
    <input type={props.type} ref={ref} />
    <label>
      {!props.error && <span className={classes.error}>ERORR</span>}
    </label>
  </div>
));
export default InputComponent;
