import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { CartPage } from "../Context";

const Header = () => {
  const { cart } = useContext(CartPage);
  return (
    <div className="container">
      {/* <span className="header">React Context Api</span> */}
      <ul className="nav">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
