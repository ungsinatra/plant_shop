import { cartItem } from '../store/reducers/cartSlice';
import { size } from '../types/inedx';

export const findItemByIdAndSize = (items:cartItem[],id:string,size:size) => {
  return items.find((e) => e.id === id && e.size === size)
}