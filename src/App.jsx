import { useState, useMemo } from "react";
import Headder from "./components/Headder";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Checkout from "./components/Checkout";
import Filter from "./components/Filter";

function App() {
  const [filter, setFilter] = useState({
    query: "",
    category: "",
    priceRange: "",
  });

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Headder />
        <Filter updateFilter={setFilter} />
        <Meals filter={filter} />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
