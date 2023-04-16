import React, { FormEvent, useRef, useState } from "react";
import classes from "./SearchBar.module.css";
import { updateString } from "../../store/searchSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";

const SearchBar = () => {
  const sString = useAppSelector((state) => state.string.string);
  const [string, setString] = useState(sString);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const input = inputRef.current!.value;
    dispatch(updateString(input));
  };

  const changeInput = () => {
    inputRef.current && setString(inputRef.current.value);
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
          ref={inputRef}
        />
        <button className={classes.button} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
