import React, { useContext, useState } from "react";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
// import useHttp from "../hooks/useHttp";
import useHttp from "../hooks/useHttp2";
import Error from "./Error";

function Checkout() {
  const userProgressContext = useContext(UserProgressContext);
  const cartContext = useContext(CartContext);

  const { error, isLoading, data, sendRequest, resetData } = useHttp();

  function handleFinish() {
    resetData();
    cartContext.clearCart();
    userProgressContext.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          customer: customerData,
          items: cartContext.items,
        },
      }),
    });

    // sendRequest(
    //   JSON.stringify({
    //     order: {
    //       customer: customerData,
    //       items: cartContext.items,
    //     },
    //   })
    // );
  }

  const checkoutTotal = cartContext.items.reduce((acc, item) => {
    return (acc = acc + item.price * item.quantity);
  }, 0);

  let actions = (
    <>
      <Button type="button" textOnly onClick={userProgressContext.hideCheckout}>
        Close
      </Button>
      <Button type="submit">Checkout</Button>
    </>
  );

  if (isLoading) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !isLoading && !error) {
    return (
      <Modal
        isOpen={userProgressContext.progress === "checkout"}
        onClick={handleFinish}
        onCancel={handleFinish}
      >
        <h2>Sucess!</h2>
        <p>Thanks for placing your order</p>
        <p>
          We'll get back to you with more details via email within few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      className="checkout"
      isOpen={userProgressContext.progress === "checkout"}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(checkoutTotal)}</p>
        <Input type="text" id="name" label="Full Name" />
        <Input type="email" id="email" label="Email" />
        <Input type="text" id="street" label="Street" />
        <div className="control-row">
          <Input type="text" id="postal-code" label="Postal Code" />
          <Input type="text" id="city" label="city" />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
      <hr />
    </Modal>
  );
}

export default Checkout;
