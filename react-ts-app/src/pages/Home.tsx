import CardContainer from "../component/CardContainer";
import React from "react";
import SearchBar from "../component/SearchBar";
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
