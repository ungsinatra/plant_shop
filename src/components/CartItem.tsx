import React from "react";
import { cartItem, cartSlice } from "../store/reducers/cartSlice";
import { useAppDispatch } from "../helpers/reduxHelper";
import Button from "./widgets/UI/Button";
interface cartItemProps {
  item: cartItem;
}
const CartItem: React.FC<cartItemProps> = ({ item }) => {
  const { deleteItem, updateItem } = cartSlice.actions;
  const dispatch = useAppDispatch();
  const { count, mainImg, name, price, size } = item;

  const handleUpValue = () => {
    dispatch(
      updateItem({
        cardId: item.id,
        type: "increment",
        size: item.size,
      })
    );
  };
  const handleDownValue = () => {
    dispatch(
      updateItem({
        cardId: item.id,
        type: "decrement",
        size: item.size,
      })
    );
  };

  return (
    <div className="row">
      <img src={mainImg} alt="product__img" className="row__img" />
      <div className="row__content">
        <div className="row__main">
          <p className="row__title">{name}</p>
          <p className="row__subtitle">SKU: 1995751877966</p>
          <p className="row__subtitle">SIZE: {size}</p>
        </div>
        <p className="row__price price">{`$${price}`}</p>
        <div className="row__features">
          <Button
            className="button feature__button row__button"
            disable={count <= 1}
            children={`-`}
            onClick={handleDownValue}
          />
          {/* <button
            className="button feature__button row__button"
            onClick={() =>
              dispatch(
                updateItem({
                  cardId: item.id,
                  type: "decrement",
                  size: item.size,
                })
              )
            }
          >
            -
          </button> */}
          <p className="feature__count row__count">{count}</p>
          <Button
            className="button feature__button row__button"
            disable={false}
            children={`+`}
            onClick={handleUpValue}
          />
          {/* <button
            className="button feature__button row__button"
            onClick={() =>
              dispatch(
                updateItem({
                  cardId: item.id,
                  type: "increment",
                  size: item.size,
                })
              )
            }
          >
            +
          </button> */}
        </div>
        <p className="row__total price  ">{`$${count * price}`}</p>
        <div
          className="row__clear-btn"
          onClick={() => dispatch(deleteItem({ id: item.id, size: item.size }))}
        ></div>
      </div>
    </div>
  );
};

export default CartItem;
