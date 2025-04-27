import { size } from "./inedx"

export type TLocalProductInfo = {
    title:string,
    text:string
}
export interface ICard {
    id:string,
    name:string,
    price:number,
    dataUpload:string,
    mainImg:string,
    categories:string[],
    sizes:size[],
    images:string[],
    localInfo:TLocalProductInfo[]
}