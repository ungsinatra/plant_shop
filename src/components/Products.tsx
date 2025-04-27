import React, { useState } from "react";
// import Card from "./Card";
import Card from "./Containers/CardContainer";
import { ICard } from "../types/card";
import CardSort from "./CardSort";
import Pagination from "./Pagination";
import Skeleton from "./Skeloton";
// import CardTypeSkeleton from "./Skeloton/type/Card";
interface ProductsProps {
  cards: ICard[];
  isLoading: boolean;
}

const Products: React.FC<ProductsProps> = ({ cards, isLoading }) => {
  const mockArray = new Array<undefined>(6).fill(undefined);
  return (
    <div className="products">
      <CardSort />
      <div className="products__lists">
        {isLoading
          ? mockArray.map((_, i) => {
              return <Skeleton key={i} type="card" />;
            })
          : cards.map((card) => {
              return <Card key={card.id} card={card} />;
            })}
      </div>
      <Pagination />
    </div>
  );
};

export default Products;
