import { cartItem } from "../store/reducers/cartSlice";

export const calcTotalPrice = (items:cartItem[]) => {
  return items.reduce((acc,item) => {
    return acc + item.count * item.price;
  },0)
}

