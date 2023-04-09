import CardContainer from "../component/homeCard/CardContainer";
import React, { useRef, useState } from "react";
import SearchBar from "../component/searchBar/SearchBar";
import { Product } from "types";
import { allProduct, searchProduct } from "../api";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputValue = useRef(localStorage.getItem("value") || "");

  const responseProducts = async () => {
    setIsLoading(true);
    if (inputValue.current.length > 0) {
      try {
        const data = await searchProduct(inputValue.current);
        setProducts(data);
        setIsLoading(false);
        if (data.length === 0) {
          alert("not ofund");
          setIsLoading(false);
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        const data = await allProduct();
        setProducts(data.products);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <>
      <SearchBar
        products={products}
        setProducts={setProducts}
        inputValue={inputValue}
        responseProduct={responseProducts}
      />
      <h1>Home page</h1>
      {isLoading && <div>Loading...</div>}
      <CardContainer products={products} />
    </>
  );
}
export default Home;
