import classes from "./Heading.module.css";

function Heading({ listProduct }) {
  const total = listProduct.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);
  return (
    <header className="container">
      <h1>Shopping Cart</h1>
      <ul className={classes.breadcrumb}>
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
      <span className={classes.count}>{total}&nbsp; items in the bag</span>
    </header>
  );
}

export default Heading;
