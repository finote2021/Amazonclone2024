import React from "react";
import { IoIosSearch } from "react-icons/io"; //   https://react-icons.github.io/react-icons/
import { IoMdCart } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import "./Header.css";
import LowerHeader from "./LowerHeader";
function Header() {
  return (
    <>
      <section>
        <div className="header_container">
          {/* logo section */}
          <div className="logo_container">
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon logo"
              />
            </a>
          </div>

          {/* delivery */}
          <span>
            <CiLocationOn />
          </span>
          <div>
            <p className="delivery"> Deliver to</p>
            <span>Ethiopia</span>
          </div>
          <div className="search">
            {/* search section      */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="kjkl" />
            <IoIosSearch size={25} />
          </div>
          {/* right side link */}
          <div className="order_container">
            <a href="" className="language">
              <img
                style={{ width: "40px", height: "25px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1200px-Flag_of_the_United_States.png?20110131151900"
                alt="united_states_flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <p>Sign In</p>
              <span> Acount & Lists</span>
            </a>
            {/* orders */}
            <a href="">
              <p>Returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="" className="cart">
              <IoMdCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
