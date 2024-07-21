import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
// import classes from "./ProductFlexed.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product, flex }) {
  const { image, title, id, rating = {}, price } = product;

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating.rate || 0} precision={0.1} />
          <small>{rating.count || 0}</small>
        </div>
        <div>
          {typeof price === "number" ? (
            <CurrencyFormat amount={price} />
          ) : (
            <span>Price not available</span>
          )}
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
