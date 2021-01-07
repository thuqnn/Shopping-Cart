import { useState } from "react";

import Heading from "./components/Heading";
import ListProduct from "./components/ListProduct";
import TotalProduct from "./components/TotalProduct";
import { PRODUCTS, PROMOTIONS } from "./mockup";

import "./App.css";

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

  const removeProduct = (name) => {
    setProducts((products) =>
      products.filter((product) => product.name !== name)
    );
    //if false [i] remove to array default
  };

  const onCheckEnterPromo = (code) => {
    const data = PROMOTIONS.find((item) => item.code === code);
    // console.log(data ? true : false);
    return data ? true : false;
  };

  return (
    <div className="App">
      <main>
        <Heading listProduct={products} />
        <ListProduct
          listProduct={products}
          onQuantityChange={onHandleChange}
          onRemoveProduct={removeProduct}
        />
        <TotalProduct
          listProduct={products}
          onCheckPromoCode={onCheckEnterPromo}
        />
      </main>
    </div>
  );
}

export default App;
