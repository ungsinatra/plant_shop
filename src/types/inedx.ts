
export interface Properties {
  name:string,
  count:number,
}
export type priceRange = {
  from:number,
  to:number
}
export type filterDataSer = {
  categories:Properties[],
  priceRange:priceRange,
  size:Properties[]
}


// ======================
// blogs

export interface blog {
  id:string,
  createAt:string,
  title:string,
  readTime:number,
  subtitle:string,
  text:string,
  img:string,
}


// size


export enum size {
  L = "L",
  S = "S",
  M = "M",
  XL = "XL"
}

// ======================= loading props


export enum loadingStatus  {
  loading = 'loading',
  success = 'success',
  error = 'error'
}

// input type 

export enum InputType  {
  text = 'text',
  number = 'number',
  checkbox = 'checkbox',
  radio = 'radio',
  password = 'password',
  email = 'email'
}

export type TInput = {
  name:string, 
  labelText:string,
  placeholder:string | null,
  onChange(e:any):void,
  type:InputType
  value:string,
  className:string
}

// options region and country

export interface IOption  {
  label:string,
  value:string,
  countries:TCountryOption[]
}
// export type TCity = {
//   name:string,
//   value:string,
// }
export type TRegion = Pick <IOption,'label' | 'value' >
export type TCountryOption ={
  nameCountry:string
  regions:TRegion[]
}
