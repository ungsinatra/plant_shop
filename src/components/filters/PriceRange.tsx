import React from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/reduxHelper";
import { filterSilce } from "../../store/reducers/filterSlice";

const PriceRange = () => {
  const { price } = useAppSelector((state) => state.filter);
  const { setPrice } = filterSilce.actions;
  const dispatch = useAppDispatch();

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPrice(+e.target.value));
  };

  return (
    <>
      <p className="filter__title">Price Range</p>
      <div className="price-range">
        <div className="price-range__container">
          <input
            value={`${price}`}
            type="range"
            min={36}
            max={1230}
            step={1}
            className="input__range"
            onChange={handlePrice}
          />
          <p className="range__value">
            Price:<span className="range__price"> {`${price} - $1230`}</span>
          </p>
          <button className="button range__button">Filter</button>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
