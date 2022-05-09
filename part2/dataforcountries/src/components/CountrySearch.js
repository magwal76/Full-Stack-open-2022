import React from "react";
const SearchForCountry = ({ filter, onFilterChange }) => {
  
  return (
    <div>
      Find countries:{" "}
      <input value={filter} onChange={onFilterChange} type="search" />
    </div>
  );
};

export default SearchForCountry;