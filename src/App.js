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
    price: 1210,
    quantity: 6.5,
  },
  {
    name: "Milk",
    description: "Delicious milk",
    image: "./image/2.jpeg",
    price: 1111,
    quantity: 3.1,
  },
  {
    name: "Apple Fake",
    description: "Delicious milk",
    image: "./image/3.jpeg",
    price: 2456,
    quantity: 5.9,
  },
];
function App() {
  const [products, setProducts] = useState(PRODUCTS);

  let items = [];
  let totalItems = 0;
  let subTotal = 0;
  for (let i = 0; i < products.length; i++) {
    items.push(
      <ListProduct
        key={products[i].name}
        src={products[i].image}
        name={products[i].name}
        description={products[i].description}
        price={products[i].price}
        quantity={products[i].quantity}
        onRemoveProduct={removeProduct}
      />
    );
    totalItems += products[i].quantity;
    subTotal += products[i].price * products[i].quantity;
  }
  function removeProduct(name) {
    setProducts((products) =>
      products.filter((product) => product.name !== name)
    );
    //if false [i] remove to array default
  }

  return (
    <div className="App">
      <main>
        <Heading totalItems={totalItems} />
        <section className="container">
          <ul className="products">{items}</ul>
        </section>
        <TotalProduct subTotal={subTotal} />
      </main>
    </div>
  );
}

export default App;
