import React, { forwardRef, RefObject } from "react";

type MyProps = {
  radio1: RefObject<HTMLInputElement>;
  radio2: RefObject<HTMLInputElement>;
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
    </div>
  )
);
export default InputRadioComponent;
