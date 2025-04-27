import React from "react";
import Products from "./Containers/ProductsContainer";
import Filter from "./Containers/FilterContainer";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__container">
        <Filter />
        <Products />
      </div>
    </div>
  );
};

export default Shop;
