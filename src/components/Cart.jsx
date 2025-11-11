import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

function Cart() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const cartTotal = cartContext.items.reduce((acc, item) => {
    return (acc = acc + item.price * item.quantity);
  }, 0);

  function handleAddItem(item) {
    cartContext.addItem(item);
  }

  function handleRemoveItem(itemId) {
    cartContext.removeItem(itemId);
  }

  return (
    <Modal
      className="cart"
      isOpen={userProgressContext.progress === "cart"}
      onCancel={userProgressContext.hideCart}
    >
      <h2>Your Cart</h2>
      {cartContext.items.length === 0 ? (
        <div className="empty-cart">
          <img src="/empty-plate.jpg" alt="No meals" className="no-meals-img" />
          <h2>Your cart is Empty</h2>
          <p>Try Adding some items.</p>
        </div>
      ) : (
        <>
          {" "}
          <ul>
            {cartContext.items.map((item) => {
              return (
                <CartItem
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  key={item.id}
                  addItem={() => handleAddItem(item)}
                  removeItem={() => handleRemoveItem(item.id)}
                />
              );
            })}
          </ul>
          <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        </>
      )}
      <p className="modal-actions">
        <Button textOnly onClick={userProgressContext.hideCart}>
          Close
        </Button>
        {cartContext.items.length > 0 && (
          <Button onClick={userProgressContext.showCheckout}>
            Go to Checkout
          </Button>
        )}
      </p>
    </Modal>
  );
}

export default Cart;
