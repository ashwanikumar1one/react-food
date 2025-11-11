import React, { useState } from "react";
import Button from "./UI/Button";

function PriceFilter({ updateFilter }) {
  const [priceRange, setPriceRange] = useState("");

  function handlePriceRange(range) {
    const nextValue = priceRange === range ? "all" : range;

    updateFilter((prev) => {
      return {
        ...prev,
        priceRange: nextValue,
      };
    });

    setPriceRange(nextValue);
  }

  return (
    <div className="price-filter">
      <Button
        className={`price-button ${priceRange === "all" ? "active" : ""}`}
        onClick={() => handlePriceRange("all")}
      >
        All
      </Button>
      <Button
        className={`price-button ${priceRange === "basic" ? "active" : ""}`}
        onClick={() => handlePriceRange("basic")}
      >
        Basic
      </Button>
      <Button
        className={`price-button ${priceRange === "premium" ? "active" : ""}`}
        onClick={() => handlePriceRange("premium")}
      >
        Premium ($10 - $50)
      </Button>
      <Button
        className={`price-button ${priceRange === "special" ? "active" : ""}`}
        onClick={() => handlePriceRange("special")}
      >
        Special ($50+)
      </Button>
    </div>
  );
}

export default PriceFilter;
