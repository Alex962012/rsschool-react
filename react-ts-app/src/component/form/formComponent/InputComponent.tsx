import React, { forwardRef } from "react";
type MyProps={
    type:string,
    text:string
}

const InputComponent = forwardRef<HTMLInputElement,MyProps>((props, ref) => (
  <div>
    <label>{props.text}</label>
    <input type={props.type} ref={ref} />
  </div>
));
export default InputComponent;
