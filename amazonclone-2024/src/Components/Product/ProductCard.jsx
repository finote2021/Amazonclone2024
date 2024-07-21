import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { useContext } from "react";
import { Type } from "../../Utility/action.type";
import { Link } from "react-router-dom";

function ProductCard({ product, flex, renderDesc }) {
  const {
    image = "",
    title = "",
    id = "",
    description = "",
    rating = { rate: 0, count: 0 },
    price = 0,
  } = product;

  const { state, dispatch } = useContext(DataContext);
  // console.log(JSON.stringify(product, null, 2));

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, description, rating, price },
    });
  };

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && (
          <div style={{ maxWidth: "750px" }}>
            {description ? description : "No description available"}
          </div>
        )}
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
        <button className={classes.button} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
