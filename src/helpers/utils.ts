import { card } from './../types/card';
import axios from 'axios';
import { BASE_URL } from './api/api';
import ContentLoader from "react-content-loader";
import { useAppDispatch } from './reduxHelper';
export const colors = {
    green:'#46A358',
    textColor:'#3D3D3D'
}






export const fetchLikeCard = (_id:string,card:card) => {
    const likedCards = localStorage.getItem('likedCards');
    if(likedCards){
        const likedList = JSON.parse(likedCards);
        const isLiked = isCardLiked(_id,likedList);
        const newLikedList = likeCard(isLiked,_id,likedList,card);
        localStorage.setItem('likedCards',JSON.stringify([...newLikedList]));
        return
    }
    localStorage.setItem('likedCards',JSON.stringify([card]));
}


export const isCardLiked = (cardId:string,cardList:card[]):boolean => {
    const res = cardList.find((card) => {
        return card.id === cardId
    })
    if(res){
        return true
    }
    return false
}

export const likeCard = (isLiked:boolean,cardId:string,likedList:card[],card:card) => {
    if(isLiked){
        const newLikedList = likedList.filter((card) => {
            return card.id !== cardId;
        })
        return newLikedList
    }else{
        const newlistLikes = [...likedList,card]
        return newlistLikes
    }
}

//Categories ==========================================================================

export const categoriesList = ["House Plants", "Potter Plants","Seeds","Small Plants", "Big Plants","Succulents","Trerrariums","Gardening","Accessories"
]



// sort =======================================================================
export const sortlistData:{name:string,sortProperty:string}[] = [
    { name: 'популярности (DESC)', sortProperty: 'rating' },
    { name: 'популярности (ASC)', sortProperty: '-rating' },
    { name: 'цене (DESC)', sortProperty: 'price' },
    { name: 'цене (ASC)', sortProperty: '-price' },
    { name: 'алфавиту (DESC)', sortProperty: 'name' },
    { name: 'алфавиту (ASC)', sortProperty: '-name' },
];

// pagination


export const pagesList = new Array(3).fill(0);