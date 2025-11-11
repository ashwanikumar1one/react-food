import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {
    s;
  },
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    let updatedItems = [...state.items];

    if (existingItemIndex > -1) {
      // If Item is already in the cart, so need to increase the quantity
      const existingItem = updatedItems[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      //   updatedItems = [...state.items, updatedItem];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // Item is not in the cart, so need to add it and update quanity to 1
      updatedItems.push({ ...action.payload, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    // getting the index of the item to be removed

    // Existing Item Index
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    // Existing Item
    const existingItem = state.items[existingItemIndex];

    const updatedItems = [...state.items];

    if (existingItem.quantity > 1) {
      // When Quentity is > 1
      //   const existingItem = state.items[existingItemIndex];
      //   existingItem.quantity -= 1;
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // When Quentity is < or = 1

      updatedItems.splice(existingItemIndex, 1);
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  }

  function removeItem(itemId) {
    dispatchCartAction({ type: "REMOVE_ITEM", id: itemId });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART", payload: [] });
  }

  const value = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  //   console.log(value);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
