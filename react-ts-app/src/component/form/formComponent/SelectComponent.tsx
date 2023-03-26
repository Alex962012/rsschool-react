import React, { forwardRef } from "react";

const SelectComponent = forwardRef<HTMLSelectElement>((props, ref) => (
  <div>
    <label>
      Category
      <select id="category-select" ref={ref}>
        <option value="cloth">cloth</option>
        <option value="electronics">electronics</option>
        <option value="decorations">decorations</option>
      </select>
    </label>
  </div>
));
export default SelectComponent;
