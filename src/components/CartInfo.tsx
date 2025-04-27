import React from "react";
import Button from "./widgets/UI/Button";
import { Link } from "react-router-dom";
import CouponWidget from "./widgets/Coupon";
import { useAppSelector } from "../helpers/reduxHelper";

const CartInfo = () => {
  const { totalPrice } = useAppSelector((state) => state.cart);
  return (
    <div className="cart-info">
      <div className="cart-info__container">
        <h2 className="cart-info__title ">Cart Totals</h2>
        <CouponWidget />
        <ul className="cart-info__items">
          <li className="cart-info__item">
            <p className="cart-info__item-text">Subtotal</p>
            <span className="cart-info__item-main-text">{`$${totalPrice}`}</span>
          </li>
          <li className="cart-info__item">
            <p className="cart-info__item-text">Coupon Discount</p>
            <span className="cart-info__item-main-text">(-) 00.00</span>
          </li>
          <li className="cart-info__item">
            <p className="cart-info__item-text">Shiping</p>
            <span className="cart-info__item-main-text">$16.00</span>
          </li>
          <li className="cart-info__item total-count">
            <p className="cart-info__item-text cart-info__item-text-weigth ">
              Total
            </p>
            <span className="cart-info__item-main-text cart-info__price">
              {`$${totalPrice}`}
            </span>
          </li>
        </ul>
        <Button
          className="cart-info__button button"
          disable={false}
          onClick={() => console.log()}
          children="Proceed To Checkout"
        />
        <Link to={`/`} className="cart-info__link">
          <p style={{ margin: "0" }} className="">
            Continue Shopping
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CartInfo;
