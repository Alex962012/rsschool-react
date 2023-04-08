import CardContainer from "../component/homeCard/CardContainer";
import React, { useState } from "react";
import SearchBar from "../component/searchBar/SearchBar";
import { GET200_Products, Product } from "types";
import { AxiosResponse } from "axios";
import axiosInstance from "../api";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const responseProducts = async () => {
    try {
      const response: AxiosResponse<GET200_Products> = await axiosInstance.get(
        ""
      );
      setProducts(response.data.products);
    } catch (e) {
      console.error(e);
    }
  };

  if (products.length === 0) {
    responseProducts();
  }
  return (
    <>
      <SearchBar products={products} setProducts={setProducts} />
      <h1>Home page</h1>
      <CardContainer products={products} />
    </>
  );
}
export default Home;
