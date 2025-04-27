import React from "react";
import { useAppSelector } from "../helpers/reduxHelper";
import CartItem from "./CartItem";
import CartInfo from "./CartInfo";

const Cart = () => {
  const { items } = useAppSelector((state) => state.cart);
  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__items">
          <div className="table">
            <div className="  table__titles">
              <p className=" product-name table__title">Products</p>
              <p className=" price-name table__title">Price</p>
              <p className=" quantity-name table__title">Quantity</p>
              <p className=" total-name table__title">Total</p>
            </div>
            <div className="table__items">
              {items.map((item) => {
                return <CartItem item={item} key={item.id + item.size} />;
              })}
            </div>
          </div>
          <CartInfo />
        </div>
          <div className="product-lists"></div>
      </div>
    </div>
  );
};

export default Cart;
