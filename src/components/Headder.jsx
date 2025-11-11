import React, { useContext } from "react";
import logo from "../../public/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Search from "./Search";
import PriceFilter from "./PriceFilter";

function Headder({ updateFilter }) {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const totalCartItems = cartContext.items.reduce((acc, item) => {
    return (acc = acc + item.quantity);
  }, 0);

  function showCart() {
    userProgressContext.showCart();
  }

  return (
    <>
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="brand-logo" />
          <h1>REACTFOOD</h1>
        </div>
        <nav className="navigation">
          <Button onClick={showCart} textOnly>
            <i className="fas fa-shopping-cart"></i> ({totalCartItems})
          </Button>

          <Button onClick={showCart} textOnly>
            <i className="fas fa-user"></i> Ashwani
          </Button>
        </nav>
      </div>
    </>
  );
}

export default Headder;
