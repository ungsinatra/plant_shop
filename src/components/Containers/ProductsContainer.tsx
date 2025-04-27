import React, { useEffect} from "react";
import Products from "../Products";
import { useAppDispatch, useAppSelector } from "../../helpers/reduxHelper";
import { fetchCards } from "../../store/reducers/productsSlice";

const ProductsContainer = () => {
  const { curentPage } = useAppSelector((state) => state.pagination);
  const filter = useAppSelector((state) => state.filter);
  const { category, price, size, sort } = filter;
  const { status, cards } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchCards({
        filter: filter,
        page: curentPage,
      })
    );
  }, [category, price, size, sort]);

  return <>{<Products cards={cards} isLoading={status === "loading"} />}</>;
};

export default ProductsContainer;
