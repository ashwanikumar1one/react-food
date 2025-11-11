import React from "react";
import { currencyFormatter } from "../util/formatting";

function CartItem({ name, quantity, price, addItem, removeItem }) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} × {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={removeItem}>-</button>
        <span>QTY</span>
        <button onClick={addItem}>+</button>
      </p>
    </li>
  );
}

export default CartItem;
