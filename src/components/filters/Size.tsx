import React from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/reduxHelper";
import { filterSilce } from "../../store/reducers/filterSlice";

const Size = () => {
  const { size } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const { setSize } = filterSilce.actions;
  const sizeCount = ["small", "medium", "large"];
  // Исправить сделать общий fn для всех фильтр
  const handleSize = (size: string) => {
    dispatch(setSize(size));
  };

  return (
    <>
      <p className="filter__title">Size</p>
      <div className="size categories">
        <div className="categories__container">
          <ul className="categories__items">
            {sizeCount.map((item, i) => {
              return (
                <li
                  key={i}
                  className="categories__item"
                  onClick={() => handleSize(item)}
                >
                  <p
                    className={`categories__item-text ${
                      item === size ? "active" : ""
                    }`}
                  >
                    {item}
                  </p>
                  <span className={`${item === size ? "active" : ""}`}>
                    (13)
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Size;
