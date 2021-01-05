function TotalProduct({ subTotal }) {
  function formatCurrency(subTotal) {
    return new Intl.NumberFormat().format(Math.round(subTotal));
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
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>${formatCurrency(subTotal)}</span>
          </li>
          <li>
            Tax <span>${totalTax(subTotal)}</span>
          </li>
          <li className="total">
            Total <span>${totalProduct(subTotal)}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}

export default TotalProduct;
