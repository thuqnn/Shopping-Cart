import classes from "./TotalProduct.module.css";

function TotalProduct({ listProduct }) {
  const subTotal = listProduct.reduce((total, product) => {
    return total + +product.quantity * +product.price;
  }, 0);
  function formatCurrency(subTotal) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Math.round(subTotal));
  }
  function totalTax(subTotal) {
    let totalTax = subTotal * 0.1;
    return formatCurrency(totalTax);
  }
  function totalProduct(subTotal) {
    let total = subTotal + subTotal * 0.1;
    return formatCurrency(total);
  }
  return (
    <section className="container">
      <div className={classes.promotion}>
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className={classes.summary}>
        <ul>
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>
          <li>
            Tax (10%)<span>{totalTax(subTotal)}</span>
          </li>
          <li className={classes.total}>
            Total <span>{totalProduct(subTotal)}</span>
          </li>
        </ul>
      </div>
      <div className={classes.checkout}>
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}

export default TotalProduct;
