import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, description } = product ?? {};
  const [{ basket }, dispatch] = useContext(DataContext); // Fix: use destructuring to get basket state

  const addToCart = () => {
    dispatch({ type: "ADD_TO_BASKET", item: product });
  };

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h6>{title}</h6>
        <br />
        {renderDesc && <div style={{ maxWidth: "500PX" }}> {description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;


// import React, { useContext } from "react";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from "./Product.module.css";
// import { Link } from "react-router-dom";
// import { DataContext } from "../DataProvider/DataProvider";

// function ProductCard({ product, flex, rederDesc, renderAdd }) {
//   const { image, title, id, rating, price, description } = product ?? {};
//   const [state, dispatch] = useContext(DataContext);

//   const addToCart = () => {
//     dispatch({ type: "ADD_TO_BASKET", item: product });
//   };

//   return (
//     <div
//       className={`${classes.card_container} ${
//         flex ? classes.product_flexed : ""
//       }`}
//     >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt="" className={classes.img_container} />
//       </Link>
//       <div>
//         <h6>{title}</h6>
//         <br />
//         {rederDesc && <div style={{ maxWidth: "500PX" }}> {description}</div>}
//         <div className={classes.rating}>
//           {/* rating */}
//           <Rating value={rating?.rate} precision={0.1} />
//           {/* count */}
//           <small>{rating?.count}</small>
//         </div>
//         <div>
//           {/* price */}
//           <CurrencyFormat amount={price} />
//         </div>
//         {renderAdd && (
//           <button className={classes.button} onClick={addToCart}>
//             add to cart
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

// import React from "react";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from "./Product.module.css";
// import { DataContext } from "../DataProvider/DataProvider";
// import { useContext } from "react";
// import { Type } from "../../Utility/action.type";
// import { Link } from "react-router-dom";

// function ProductCard({ product, flex, renderDesc, renderAdd }) {
//   // const {
//   //   image = "",
//   //   title = "",
//   //   id = "",
//   //   description = "",
//   //   rating = { rate: 0, count: 0 },
//   //   price = 0,
//   // } = product;
//   const { image, title, id, rating, price, description } = product ?? {};
//   const { state, dispatch } = useContext(DataContext);

//   const addToCart = () => {
//     dispatch({
//       Type: Type.ADD_TO_BASKET,
//       item: { image, title, id, description, rating, price },
//     });
//   };

//   return (
//     <div
//       className={`${classes.card_container} ${
//         flex ? classes.product_flexed : ""
//       }`}
//     >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title} />
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         {renderDesc && (
//           <div style={{ maxWidth: "750px" }}>
//             {description ? description : "No description available"}
//           </div>
//         )}
//         <div className={classes.rating}>
//           <Rating value={rating.rate || 0} precision={0.1} />
//           <small>{rating.count || 0}</small>
//         </div>
//         <div>
//           {typeof price === "number" ? (
//             <CurrencyFormat amount={price} />
//           ) : (
//             <span>Price not available</span>
//           )}
//         </div>

//         {renderAdd && (
//           <button className={classes.button} onClick={addToCart}>
//             Add to Cart
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
