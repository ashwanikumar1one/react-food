import React, { useState } from "react";
import Input from "./UI/Input";
import VegFilter from "./VegFilter";

function Search({ updateFilter }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    const v = e.target.value;
    setSearch(v);
    updateFilter((prev) => ({
      ...prev,
      query: v,
    }));
  }

  return (
    <div className="search-bar">
      <Input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search meals..."
      />
      <VegFilter updateFilter={updateFilter} setSearch={setSearch} />
    </div>
  );
}

export default Search;
