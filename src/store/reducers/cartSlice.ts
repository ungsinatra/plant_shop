import { ICard } from './../../types/card';
import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { calcTotalCounts } from '../../helpers/calcTotolCounts';
import { calcTotalPrice } from '../../helpers/calcTotalPrice';
import { size } from '../../types/inedx';
import { findItemByIdAndSize } from '../../helpers/findItemByIdAndSize';


export type cartItem  = Omit<ICard,'sizes'> & {
  size:size,
  count:number,
 }
export interface cart {
  totalPrice:number,
  items:cartItem[],
  itemCounts:number,

}

// const cartItems = JSON.parse(localStorage.getItem('cart') as string);
// const initialItems = cartItems ? cartItems : 0;
// const initialCounts = initialItems ? calcTotalCounts(initialItems) : 0;
// const initialTotalPrice = initialItems ? calcTotalPrice(initialItems) : 0;
// console.log(cartItems)
// # Нужно срочно рефакторинг!!!!!
const initialState:cart ={ 
  itemCounts: 0,
  items: [],
  totalPrice:0,
}

export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addItem(state,action:PayloadAction<{item:cartItem,count:number}>){
      const {count,item} = action.payload;
      const {items,itemCounts,totalPrice} = state;
      const isItemInCart = findItemByIdAndSize(items,item.id,item.size);
      if(!isItemInCart){
        const updatedCartItems = [...state.items,item];
        return {
          items:updatedCartItems,
          itemCounts:calcTotalCounts(updatedCartItems),
          totalPrice:calcTotalPrice(updatedCartItems)
        }
      }
      const updateItems = state.items.map((element) => {
        if(element.id === item.id && element.size === item.size){
          return {
            ...element,
            count,
          }
        }
        return item;
      })

      return {
        items:updateItems,
        itemCounts:calcTotalCounts(updateItems),
        totalPrice:calcTotalCounts(updateItems),
      }
    },
    updateItem(state,action:PayloadAction<{cardId:string,type:'increment' | 'decrement',size:size}>){
      const {cardId,type,size} = action.payload;
      const changeCount = type === 'increment'? 1:-1;
      const updateItems = state.items.map((item) => {
        if(item.id === cardId && item.size === size){
          return {
            ...item,
            count:item.count + changeCount,
          }
        }
        return item;
      })
      const allCounts = calcTotalCounts(updateItems)
      const totalPrice = calcTotalPrice(updateItems);

      return {
        ...state,
        items:updateItems,
        itemCounts:allCounts,
        totalPrice:totalPrice,
      }
    },
    deleteItem(state,action:PayloadAction<{id:string,size:size}>){
      const {id,size} = action.payload;
      const updateItems = state.items.filter((item) =>  item.id !== id || item.size !== size)
      return {
        items:updateItems,
        itemCounts:calcTotalCounts(updateItems),
        totalPrice:calcTotalPrice(updateItems),
      }
    },
    removeItems(state){
      state.items = [];
      state.itemCounts = 0;
      state.totalPrice  = 0;
    }
  }
})

export default cartSlice.reducer;