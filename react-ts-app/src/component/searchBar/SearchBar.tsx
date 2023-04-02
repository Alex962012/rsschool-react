import React, { useEffect, useRef, useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const inputValue = useRef(localStorage.getItem("value") || "");
  const [string, setString] = useState(inputValue.current);

  useEffect(() => {
    localStorage.setItem("value", `${inputValue.current}`);
    inputValue.current = string;
  });

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setString(e.target.value);
  };

  return (
    <div className={classes.searchContainer}>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={string}
          onChange={changeInput}
          className={classes.input}
        />
        <button className={classes.button} type="submit">
          ss
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
