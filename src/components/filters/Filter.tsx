import React from "react";
import Categories from "./Categories";
import PriceRange from "./PriceRange";
import Size from "./Size";

const Filter:React.FC = () => {
  return (
    <div className="filter">
      <Categories />
      <PriceRange />
      <Size />
    </div>
  );
};

export default Filter;
