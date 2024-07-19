import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import SignIn from "./pages/Auth/Signup";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";

function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routering;
