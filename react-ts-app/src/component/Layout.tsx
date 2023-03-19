import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>2023</footer>
    </>
  );
}

export default Layout;
