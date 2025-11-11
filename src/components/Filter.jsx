import React from "react";
import Search from "./Search";
import PriceFilter from "./PriceFilter";

function Filter({ updateFilter }) {
  return (
    <div className="filter">
      <Search updateFilter={updateFilter} />
      <PriceFilter updateFilter={updateFilter} />
    </div>
  );
}

export default Filter;
