import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';


interface pagination {
  pages:number
  curentPage:number,
}

const initialState:pagination = {
  pages:3,
  curentPage:1,
}

export const paginationSlice = createSlice({
  name:"pagination",
  initialState,

  reducers:{
    nextPage(state,action:PayloadAction<number>){
      state.curentPage = state.curentPage + 1;
    },
    prevPage(state,action:PayloadAction<number>){
      state.curentPage = state.curentPage - 1 ;
    },
    setPage(state,action:PayloadAction<number>){
      state.curentPage = action.payload ;
    },
  }
})
export const {nextPage,prevPage,setPage} = paginationSlice.actions
export default paginationSlice.reducer;
