import React, { useEffect } from "react";
import { useAppSelector } from "../helpers/reduxHelper";
import { useParams } from "react-router-dom";
import { size } from "../types/inedx";
import { findItemByIdAndSize } from "../helpers/findItemByIdAndSize";
interface ProductButtonGroupProps {
  count: number;
  onClick: React.Dispatch<React.SetStateAction<number>>;
  addToCart(): void;
  selectedSize: size;
}

const ProductButtonGroup: React.FC<ProductButtonGroupProps> = ({
  count,
  onClick,
  addToCart,
  selectedSize,
}) => {
  const { id } = useParams();
  const { items } = useAppSelector((state) => state.cart);
  const isItemInCart = findItemByIdAndSize(items, id as string, selectedSize);

  useEffect(() => {
    if (isItemInCart) {
      onClick(isItemInCart.count);
    } else {
      onClick(1);
    }
  }, [selectedSize]);

  const handleIncrementToCard = () => {
    onClick((count += 1));
  };
  const handleDicrementFromCard = () => {
    if (count >= 1) {
      onClick((count -= 1));
    }
  };

  return (
    <div className="feature">
      <div className="feature__add-button">
        <button
          className="button feature__button"
          onClick={handleDicrementFromCard}
          disabled={count == 1}
        >
          -
        </button>
        <p className="feature__count">{count}</p>
        <button
          className="button feature__button"
          onClick={handleIncrementToCard}
        >
          +
        </button>
      </div>
      <div className="feature__cart_buttons">
        <button className="feature__button button">boy now </button>
        <button
          className="feature__button feature__button-active button"
          onClick={addToCart}
        >
          Add to cart
        </button>
        <div className="feature__like button "></div>
      </div>
    </div>
  );
};

export default ProductButtonGroup;
