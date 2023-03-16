import React from "react";
import classes from "./SearchBar.module.css";
class SearchBar extends React.Component {
  render() {
    return (
      <div className={classes.searchContainer}>
        <div>
          <input type="text" placeholder="Search" />
          <button className={classes.button} type="submit">
            ss
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
