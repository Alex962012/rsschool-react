import { Product } from "types";
export const searchProduct = async (string: string): Promise<Product[]> => {
  const res = await fetch(`https://dummyjson.com/products/search?q=${string}`);
  const data = await res.json();
  return data.products;
};

export const allProduct = async () => {
  const res = await fetch(`https://dummyjson.com/products/`);
  const data = await res.json();
  return data;
};
