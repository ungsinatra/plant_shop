import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICard } from '../../types/card';
import { fetchProducts } from '../../helpers/api/api';
import { useAppSelector } from '../../helpers/reduxHelper';
import { loadingStatus } from '../../types/inedx';
import { filter } from './filterSlice';



export const fetchCards = createAsyncThunk<ICard[],{filter:filter,page:number}>(
  'cards/fetchCards',
  async ({filter,page}) => {
    const response = await fetchProducts(filter,page);
    return response as ICard[];
  }
)


type productSliceType = {
  cards:ICard[],
  status:loadingStatus | null
}

const initialState:productSliceType = {
  cards:[],
  status:null
}

export const productsSlice = createSlice({
  name:'product',
  initialState,
  reducers:{

  },
  extraReducers:(builder) => {
   builder.addCase(fetchCards.fulfilled,(state,action:PayloadAction<ICard[]>) => {
    state.cards = action.payload;
    state.status = loadingStatus.success
   })
   builder.addCase(fetchCards.pending,(state) => {
    state.status = loadingStatus.loading
   })
   builder.addCase(fetchCards.rejected,(state,) => {
    state.status = loadingStatus.error;
    state.cards = [];
   })
  }

})


export default productsSlice.reducer;