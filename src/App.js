import { useState } from "react";

import Heading from "./components/Heading";
import ListProduct from "./components/ListProduct";
import TotalProduct from "./components/TotalProduct";

import "./App.css";

const PRODUCTS = [
  {
    name: "Apple",
    description: "Delicious apple",
    image: "./image/1.jpeg",
    price: 1000,
    quantity: 0,
  },
  {
    name: "Milk",
    description: "Delicious milk",
    image: "./image/2.jpeg",
    price: 100,
    quantity: 0,
  },
  {
    name: "Apple Fake",
    description: "Delicious milk",
    image: "./image/3.jpeg",
    price: 200,
    quantity: 0,
  },
];

function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const onHandleChange = (newQuantity, productName) => {
    const newProducts = products.map((product) => {
      if (product.name !== productName) {
        return product;
      }
      const newProduct = {
        ...product,
        quantity: parseInt(newQuantity),
      };

      return newProduct;
    });
    setProducts(newProducts);
  };

  function removeProduct(name) {
    setProducts((products) =>
      products.filter((product) => product.name !== name)
    );
    //if false [i] remove to array default
  }

  return (
    <div className="App">
      <main>
        <Heading listProduct={products} />
        <ListProduct
          listProduct={products}
          onQuantityChange={onHandleChange}
          onRemoveProduct={removeProduct}
        />
        <TotalProduct listProduct={products} />
      </main>
    </div>
  );
}

export default App;
