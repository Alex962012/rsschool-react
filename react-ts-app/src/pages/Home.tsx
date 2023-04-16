import CardContainer from "../component/homeCard/CardContainer";
import React from "react";
import SearchBar from "../component/searchBar/SearchBar";

function Home() {
  return (
    <>
      <SearchBar />
      <h1>Home page</h1>
      <CardContainer />
    </>
  );
}
export default Home;
