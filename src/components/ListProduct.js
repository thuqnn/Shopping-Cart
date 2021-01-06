import classes from "./ListProduct.module.css";

function ListProduct({ onRemoveProduct, onQuantityChange, listProduct }) {
  return (
    <section className="container">
      <ul className={classes.products}>
        {listProduct.map((item) => {
          return (
            <li className="row" key={item.name}>
              <div className="col left">
                <div className={classes.thumbnail}>
                  <a href="/">
                    <img src={item.image} alt={item.name} />
                  </a>
                </div>
                <div className={classes.detail}>
                  <div className={classes.name}>
                    <a href="/" className={classes.titleItem}>
                      {item.name}
                    </a>
                  </div>
                  <div className={classes.listItem}>{item.description}</div>
                  <div className={classes.price}>${item.price}</div>
                </div>
              </div>
              <div className="col right">
                <div className={classes.quantity}>
                  <input
                    name={item.name}
                    type="number"
                    className={classes.quantity}
                    step={1}
                    value={item.quantity}
                    onChange={(e) => {
                      onQuantityChange(e.target.value, item.name);
                    }}
                  />
                </div>
                <div className={classes.remove}>
                  <svg
                    version="1.1"
                    className="close"
                    xmlns="//www.w3.org/2000/svg"
                    xmlnsXlink="//www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                    xmlSpace="preserve"
                    onClick={() => onRemoveProduct(item.name)}
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ListProduct;
