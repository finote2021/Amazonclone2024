import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price + amount;
  }, 0);
  console.log(basket);
  return (
    <Layout>
      <section className="container">
        <div className="cart_container">
          <h2>Hello</h2>
          <h3>Your shopping basket </h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Opps! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className="subtotal">
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("ErrorBoundary caught an error", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }

// function Cart() {
//   const { state } = useContext(DataContext);
//   const { basket = [] } = state; // default to an empty array if basket is null or undefined
//   let total = 0;

//   if (basket.length > 0) {
//     total = basket.reduce((amount, item) => {
//       // add a null check for item.price
//       return amount + (item.price || 0);
//     }, 0);
//   }

//   return (
//     <Layout>
//       <ErrorBoundary>
//         <section className="container">
//           <div className="cart_container">
//             <h2>Hello</h2>
//             <h3>Your shopping basket</h3>
//             <hr />
//             {basket?.length === 0 ? (
//               <p>Oops! No item in your cart</p>
//             ) : (
//               basket?.map((item, i) => (
//                 <ProductCard
//                   key={i}
//                   product={item}
//                   renderDesc={true}
//                   renderAdd={false}
//                   flex={true}
//                 />
//               ))
//             )}
//           </div>
//           {basket?.length !== 0 && (
//             <div className="subtotal">
//               <div>
//                 <p>Subtotal ({basket.length} items)</p>
//                 <CurrencyFormat amount={total} />
//               </div>
//               <span>
//                 <input type="checkbox" />
//                 <small>This order contains a gift</small>
//               </span>
//               <div>
//                 <Link to="/payments">Continue to checkout</Link>
//               </div>
//             </div>
//           )}
//         </section>
//       </ErrorBoundary>
//     </Layout>
//   );
// }

// export default Cart;

// import React, { useContext } from "react";
// import Layout from "../../Components/Layout/Layout";
// import { DataContext } from "../../Components/DataProvider/DataProvider";
// import ProductCard from "../../Components/Product/ProductCard";
// import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
// import { Link } from "react-router-dom";

// function Cart() {
//   const { state } = useContext(DataContext);
//   const { basket = [] } = state; // default to an empty array if basket is null or undefined
//   let total = 0;

//   if (basket.length > 0) {
//     total = basket.reduce((amount, item) => {
//       // add a null check for item.price
//       return amount + (item.price || 0);
//     }, 0);
//   }

//   return (
//     <Layout>
//       <section className="container">
//         <div className="cart_container">
//           <h2>Hello</h2>
//           <h3>Your shopping basket</h3>
//           <hr />
//           {basket.length === 0 ? (
//             <p>Oops! No item in your cart</p>
//           ) : (
//             basket.map((item, i) => (
//               <ProductCard
//                 key={i}
//                 product={item}
//                 renderDesc={true}
//                 renderAdd={false}
//                 flex={true}
//               />
//             ))
//           )}
//         </div>
//         {basket.length !== 0 && (
//           <div className="subtotal">
//             <div>
//               <p>Subtotal ({basket.length} items)</p>
//               <CurrencyFormat amount={total} />
//             </div>
//             <span>
//               <input type="checkbox" />
//               <small>This order contains a gift</small>
//             </span>
//             <div>
//               <Link to="/payments">Continue to checkout</Link>
//             </div>
//           </div>
//         )}
//       </section>
//     </Layout>
//   );
// }

// export default Cart;
