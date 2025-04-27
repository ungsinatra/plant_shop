import React, { useRef, useState } from "react";
import { categoriesList } from "../../helpers/utils";
import { useAppDispatch, useAppSelector } from "../../helpers/reduxHelper";
import filterSlice, { filterSilce } from "../../store/reducers/filterSlice";

const Categories = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { category } = useAppSelector((state) => state.filter);
  const catRef = useRef(null);
  const { setCategory } = filterSilce.actions;
  const dispatch = useAppDispatch();
  // Исправить сделать общий fn для всех фильтр
  const handleCategory = (id: number) => {
    dispatch(setCategory(id));
  };
  return (
    <>
      <p className="filter__title">Categories</p>
      <div className="categories">
        <div className="categories__container">
          <ul className="categories__items" ref={catRef}>
            {categoriesList.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`categories__item `}
                  onClick={() => handleCategory(index)}
                >
                  <p
                    className={`categories__item-text ${
                      category == index ? "active" : ""
                    }`}
                  >
                    {item}
                  </p>
                  <span className={`${category == index ? "active" : ""}`}>
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

export default Categories;
