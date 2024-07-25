import React, { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import "./Header.css";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

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

          {/* search section */}
          <div className="search">
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="search" />
            <IoIosSearch size={38} />
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
            <Link to="/auth">
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            <Link to="/Orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/Cart">
              <div className="cart">
                <IoMdCart size={35} />
                <span>{totalItem}</span>
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
