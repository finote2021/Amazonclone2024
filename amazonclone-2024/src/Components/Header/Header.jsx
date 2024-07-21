import React from "react";
import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import "./Header.css";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [state, dispatch] = useContext(DataContext); // renamed `basket` to `state`
  const { basket } = state; // destructure `basket` from `state`

  return (
    <section className="fixed">
      <section>
        <div className="header_container">
          {/* logo section */}
          <div className="logo_container">
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon logo"
              />
            </Link>
          </div>

          {/* delivery */}
          <span>
            <CiLocationOn />
          </span>
          <div>
            <p className="delivery">Deliver to</p>
            <span>Ethiopia</span>
          </div>

          <div className="search">
            {/* search section      */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="search" />
            <IoIosSearch size={25} />
          </div>

          {/* right side link */}
          <div className="order_container">
            <Link to="/Language" className="language">
              <img
                style={{ width: "40px", height: "25px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1200px-Flag_of_the_United_States.png?20110131151900"
                alt="united_states_flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="/Auth">
              <p>Sign In</p>
              <span>Acount & Lists</span>
            </Link>
            <Link to="/Orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/Cart">
              <div className="cart">
                <IoMdCart size={35} />
                <span>{basket.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
