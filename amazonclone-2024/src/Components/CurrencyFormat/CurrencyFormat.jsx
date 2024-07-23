import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount = 0 }) => {
  // Check if amount is a number
  if (typeof amount !== "number") {
    return <div>Invalid amount</div>;
  }

  // Format the amount using numeral.js
  const formattedAmount = numeral(amount).format("$0,0.00");
  return <div>{formattedAmount}</div>;
};

export default CurrencyFormat;

// import React from "react";
// import numeral from "numeral";

// const CurrencyFormat = ({ amount = 0 }) => {
//   if (typeof amount !== "number") {
//     return <div>Invalid amount</div>;
//   }

//   const formattedAmount = numeral(amount).format("$0,0.00");
//   return <div>{formattedAmount}</div>;
// };

// export default CurrencyFormat;

// const CurrencyFormat = ({ amount }) => {
//   const formattedAmount = numeral(amount).format("0,0.00");
//   return <div>{formattedAmount}</div>;
// };
