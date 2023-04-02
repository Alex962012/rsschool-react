import React, { forwardRef } from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import { IFormValues } from "../MyForm";
const SelectComponent = React.forwardRef<
  HTMLSelectElement,
  { text: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ text}, ref) => (
  <div>
    <label>
      {text}
      <select id="category-select" ref={ref}>
        <option value="cloth">cloth</option>
        <option value="electronics">electronics</option>
        <option value="decorations">decorations</option>
      </select>
    </label>
  </div>
));
export default SelectComponent;
