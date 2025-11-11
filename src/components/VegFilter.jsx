function VegFilter({ updateFilter, setSearch }) {
  function handleChange(e) {
    const v = e.target.value;
    updateFilter?.((prev) => {
      return {
        ...prev,
        query: "",
        category: v,
      };
    });
    setSearch("");
  }

  return (
    <div className="filter-wrapper">
      <select onChange={handleChange}>
        <option value="">All</option>
        <option value="veg">Veg</option>
        <option value="non-veg">Non Veg</option>
      </select>

      {/* <i className="fa fa-caret-down custom-arrow"></i> */}
    </div>
  );
}

export default VegFilter;
