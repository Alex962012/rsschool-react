import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
function Header() {
  return (
    <header className={classes.header}>
      <NavLink
        className={({ isActive }) => (isActive ? `${classes.active}` : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${classes.active}` : "")}
        to="/about"
      >
        About
      </NavLink>
    </header>
  );
}
export default Header;
