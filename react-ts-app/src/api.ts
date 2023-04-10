export const searchProduct = async (string: string) => {
  const res = await fetch(`https://dummyjson.com/products/search?q=${string}`);
  const data = await res.json();
  console.log(data.products);
  return data.products;
};

export const allProduct = async () => {
  const res = await fetch(`https://dummyjson.com/products/`);
  const data = await res.json();
  return data;
};
