import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount }) => {
  if (typeof amount !== "number") {
    throw new Error("Amount must be a number");
  }

  const formattedAmount = numeral(amount).format("$0,0.00");
  return <div>{formattedAmount}</div>;
};

export default CurrencyFormat;
