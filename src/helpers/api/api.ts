import { filter } from '../../store/reducers/filterSlice';
import { card } from '../../types/card';
import axios from 'axios';
import { blog } from '../../types/inedx';


export const BASE_URL = `https://64a0174eed3c41bdd7a6fc07.mockapi.io/greenshop/api/`;


export const fetchProducts = async (filter:filter,page:number) => {
    const category = filter.category !== null ? `&categories=${filter.category}` : '';
    const sortBy = filter.sort?.sortProperty.replace('-','')
    const order = filter.sort?.sortProperty.includes('-')? 'order=asc':'order=desc';
    const size = filter.size?`&size=${filter.size}`:'';
    const price = filter.price?`&sortby=price&order=${filter.price}`:'';

    try {
        const res = await axios.get<card[]>(`${BASE_URL}/products?limit=6&page=${page}${category}${sortBy?`&sortBy=${sortBy}&${order}`:''}${size}`);
        const cardList = res.data;
        return cardList;
    } catch (error) {   
        console.error(error)        
    }
    
}


export const fetchBlogs = async() => {
    try {
        const res = await axios.get(`${BASE_URL}blogs?limit=4&page=1`)
        return res.data;
        
    } catch (error) {
        console.log(error)
    }
  }