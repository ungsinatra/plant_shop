import {createSlice} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'

export type sortType = {
  name:string,sortProperty:string
}
export interface filter  {
  category:number | null,
  price:number | null,
  size:string | null,
  sort:sortType | null
}

const initialState:filter = {
  category:null,
  price:null,
  size:null,
  sort:null,
}


export const filterSilce = createSlice({
  name:'filter',
  initialState,
  reducers:{
    setSize(state,action:PayloadAction<string>){
      state.size = action.payload;
    },
    setSort(state,action:PayloadAction<sortType>){
      state.sort = action.payload;
    },
    setCategory(state,action:PayloadAction<number>){
      state.category = action.payload;
    },
    setPrice(state,action:PayloadAction<number>){
      state.price = action.payload;
    }
  }
})
export  default filterSilce.reducer;