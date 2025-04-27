import React from "react";
import Button from "./UI/Button";

const CouponWidget = () => {
  return (
    <div className="coupon coupon-margins">
      <label htmlFor="coupon" className="coupon__title">
        Coupon Apply
      </label>
      <div className="coupon__form">
        <input
          className="coupon__input"
          type="text"
          id="coupon"
          placeholder="Enter coupon code here..."
        />
        <Button
          className="coupon__button button"
          disable={false}
          onClick={() => console.log()}
          children="Apply"
        />
      </div>
    </div>
  );
};

export default CouponWidget;
