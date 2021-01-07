import { useState } from "react";
import classes from "./TotalProduct.module.css";
import { PROMOTIONS } from "../mockup";

function TotalProduct({ listProduct, onCheckPromoCode }) {
  const [pmCode, setPmCode] = useState("");
  const [discount, setDiscount] = useState({ discount: "0%" });

  const subTotal = listProduct.reduce((total, product) => {
    return total + +product.quantity * +product.price;
  }, 0);

  const formatDiscount = (code) => {
    let convert = code.hasOwnProperty("discount") && code.discount.slice(0, -1);
    let discount = (subTotal * parseInt(convert)) / 100;
    return formatCurrency(discount);
  };

  const handleChangeCode = (e) => {
    const value = e.target.value;
    setPmCode(value);
  };

  const formatCurrency = (subTotal) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Math.round(subTotal));
  };
  const totalTax = (subTotal) => {
    let totalTax = subTotal * 0.1;
    return formatCurrency(totalTax);
  };
  const totalProduct = (subTotal) => {
    let convertTotal =
      discount.hasOwnProperty("discount") && discount.discount.slice(0, -1);
    if (convertTotal.length >= 0) {
      let discounts = (subTotal * parseInt(convertTotal)) / 100;
      let total = subTotal - +discounts + subTotal * 0.1;
      return formatCurrency(total);
    }
    return formatCurrency(subTotal);
  };
  return (
    <section className="container">
      <div className={classes.promotion}>
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input
          type="text"
          id="promo-code"
          value={pmCode}
          onChange={handleChangeCode}
        />
        <button
          onClick={() => {
            if (onCheckPromoCode(pmCode)) {
              setDiscount(PROMOTIONS.find((promo) => promo.code === pmCode));
              //if true return first [i]
            }
          }}
          type="button"
        />
      </div>
      <div className={classes.summary}>
        <ul>
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>
          {onCheckPromoCode(pmCode) ? (
            <li>
              Discount Apply
              <span>{discount ? formatDiscount(discount) : ""}</span>
            </li>
          ) : (
            ""
          )}
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
