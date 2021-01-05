import classes from "./ListProduct.module.css";

function ListProduct({
  src,
  name,
  description,
  price,
  quantity,
  onRemoveProduct,
  onQuantityChange,
}) {
  return (
    <li className="row">
      <div className="col left">
        <div className="thumbnail">
          <a href="/">
            <img src={src} alt={name} />
          </a>
        </div>
        <div className="detail">
          <div className="name">
            <a href="/" style={{ color: "red", fontSize: "40px" }}>
              {name}
            </a>
          </div>
          <div className={classes.listItem}>{description}</div>
          <div className="price">${price}</div>
        </div>
      </div>
      <div className="col right">
        <div className="quantity">
          <input
            name={name}
            type="number"
            className="quantity"
            step={1}
            value={quantity}
            onChange={(e) => {
              onQuantityChange(e.target.value, name);
            }}
          />
        </div>
        <div className="remove">
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
            onClick={() => onRemoveProduct(name)}
          >
            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
          </svg>
        </div>
      </div>
    </li>
  );
}

export default ListProduct;
