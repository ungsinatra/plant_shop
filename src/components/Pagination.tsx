import React from "react";
import ReactPaginate from "react-paginate";
import { useAppDispatch, useAppSelector } from "../helpers/reduxHelper";
import { pagesList } from "../helpers/utils";
import { setPage, nextPage, prevPage } from "../store/reducers/paginationSlice";
const Pagination = () => {
  const { curentPage, pages } = useAppSelector((state) => state.pagination);
  const [isFirstPage, setIsFirstPage] = React.useState(false);

  const dispatch = useAppDispatch();
  const handleSkipPage = (type: string) => {
    switch (type) {
      case "next":
        // if (curentPage + 1 !> pages) {
        dispatch(nextPage(curentPage + 1));
        return;
        // }
        break;
      case "prev":
        if (curentPage > 1) {
          dispatch(setPage(curentPage - 1));
          return;
        }
        break;
      default:
        break;
    }

    setIsFirstPage(true);
  };

  const handelSetPage = (page: number) => {
    dispatch(setPage(page));
  };
  return (
    <div className="pagination">
      <div className="pagination__container">
        <ul className="pages">
          <li
            className="pages__list"
            onClick={() => handleSkipPage("prev")}
            aria-disabled={true}
          >{`<`}</li>
          {pagesList.map((_, i) => {
            return (
              <li
                key={i}
                onClick={() => handelSetPage(i + 1)}
                className={`pages__list ${
                  curentPage === i + 1 ? "pages__list-active" : ""
                } `}
              >
                {i + 1}
              </li>
            );
          })}
          <li
            className="pages__list"
            onClick={() => handleSkipPage("next")}
          >{`>`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
