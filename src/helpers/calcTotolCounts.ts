import { cartItem } from "../store/reducers/cartSlice";

export const calcTotalCounts = (items:cartItem[]) => {
  return items.reduce((acc,item) => acc + item.count,0)
}