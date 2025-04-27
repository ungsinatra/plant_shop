import React, { useState, useEffect } from "react";
import Filter from "../filters/Filter";

interface IFilterValues {
  category?: string;
  price?: number;
  size?: string;
}

const FilterContainer = () => {
  return (
    <div>
      <Filter />
    </div>
  );
};

export default FilterContainer;
