import { cartItem } from "../store/reducers/cartSlice";

export const addCartItemsInLS = (cartItems:cartItem[]) => {
  localStorage.setItem('cart',JSON.stringify(cartItems))
}