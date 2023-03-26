import React, { forwardRef, RefObject } from "react";
import classes from "../MyForm.module.css";
type MyProps = {
  radio1: RefObject<HTMLInputElement>;
  radio2: RefObject<HTMLInputElement>;
  error: boolean;
};

const InputRadioComponent = forwardRef<HTMLInputElement, MyProps>(
  (props, ref) => (
    <div>
      <label>
        <input
          type="radio"
          value="men"
          name="productStatus"
          ref={props.radio1}
        />
        ForMen
      </label>
      <label>
        <input
          type="radio"
          value="woman"
          name="productStatus"
          ref={props.radio2}
        />
        ForWoman
      </label>
      {!props.error && <span className={classes.error}>ERORR</span>}
    </div>
  )
);
export default InputRadioComponent;
