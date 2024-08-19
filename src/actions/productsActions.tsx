
import { ERROR_FETCHING_PRODUCTS, PRODUCTS } from './actionTypes'


export const getProducts = ({data, error}: {data: {products:string[]}, error: string}) => {
   
  if (error)
  return { type: ERROR_FETCHING_PRODUCTS, payload: { products: [], error} };
  return   {
    type: PRODUCTS,
    payload: data ?? { products: [], error: null },
  };
}
