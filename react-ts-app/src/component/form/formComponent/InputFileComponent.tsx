import React, { forwardRef } from "react";

const InputFileComponent = forwardRef<HTMLInputElement>((props, ref) => (
  <div>
    <label>
      Image:
      <input type="file" accept="image/jpeg,image/png,image/gif" ref={ref} />
    </label>
  </div>
));
export default InputFileComponent;
