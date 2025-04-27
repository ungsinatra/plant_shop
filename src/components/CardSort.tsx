import React from "react";
import { useAppDispatch, useAppSelector } from "../helpers/reduxHelper";
import { sortlistData } from "../helpers/utils";
import { filterSilce, sortType } from "../store/reducers/filterSlice";

const CardSort = () => {
  const { sort } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const { setSort } = filterSilce.actions;

  const sortHandler = (type: sortType) => {
    dispatch(setSort(type));
  };

  return (
    <div className="sort">
      <div className="sort__container">
        <ul className="sort__lists">
          <li className="sort__list sort__list-active">All Plants</li>
          <li className="sort__list">New Arrivals</li>
          <li className="sort__list">Sale</li>
        </ul>
        <div className="selector__wrapper">
          <label htmlFor="selector__sort">Short by:</label>
          <select
            name="sort"
            id="selector__sort"
            value={sort?.sortProperty}
            onChange={(e) =>
              dispatch(
                setSort({
                  name: "asdasd",
                  sortProperty: e.target.value,
                })
              )
            }
          >
            {sortlistData.map((list, i) => {
              return (
                <option key={i} value={list.sortProperty}>
                  {list.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CardSort;
