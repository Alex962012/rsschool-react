import React, { FormEvent, useEffect, useState } from "react";
import classes from "./SearchBar.module.css";

import { Product } from "../../types";
interface SearchBarProps {
  products: Array<Product>;
  setProducts: (value: Array<Product>) => void;
  inputValue: { current: string };
  responseProduct: () => void;
}

const SearchBar = (props: SearchBarProps) => {
  const [string, setString] = useState(props.inputValue.current);

  useEffect(() => {
    localStorage.setItem("value", `${props.inputValue.current}`);
    props.inputValue.current = string;
  });

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setString(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.responseProduct();
  };

  return (
    <div className={classes.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter for example an apple... "
          value={string}
          onChange={changeInput}
          className={classes.input}
        />
        <button className={classes.button} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
