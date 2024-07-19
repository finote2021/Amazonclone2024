import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

function ProductCard({ product }) {
  const { image, title, id, rating = {}, price } = product; // {} , I included {} after rating to provide a default value for the rating object in case it's not present in the product object.

// In JavaScript, when you try to access a property of an object that doesn't exist, it will return undefined. For example, if product doesn't have a rating property, then product.rating would be undefined.

  return (
    <div>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div>
          <Rating value={rating.rate || 0} precision={0.1} />
          <small>{rating.count || 0}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
