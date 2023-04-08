import axiosInstance from "../../api";
import React, { useEffect, useRef, useState } from "react";
import classes from "./SearchBar.module.css";
import { AxiosResponse } from "axios";
import { GET200_Products, Product } from "types";

const SearchBar = (props: any) => {
  const inputValue = useRef(localStorage.getItem("value") || "");
  const [string, setString] = useState(inputValue.current);
  const [isLoading, SetIsLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("value", `${inputValue.current}`);
    inputValue.current = string;
  });

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setString(e.target.value);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault;
    try {
      const response: AxiosResponse<GET200_Products> = await axiosInstance.get(
        `search?q=${string}`
      );
      props.setProducts(response.data.products);
    } catch (e) {
      console.error(e);
    } finally {
    }
  };

  return (
    <div className={classes.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
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
