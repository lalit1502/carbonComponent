//import React from 'react';
//import product1 from "./../assets/images/product1.jpg";
import Data from "./data.json"
//import Context from './contextapi'
import { storeProductsProps , CategoryProps  } from '../components/interface'

export const storeProducts:storeProductsProps[]=  Data.Products;

export const category:CategoryProps[]=  Data.Category;

export const getCategory = (ids:number | string):any => {
  //let categorys:any = category?.find((item)  => ids === item?.id);
  //return categorys.title;
  return category?.find((item)  => ids === item?.id)?.title;
  // let categorys =category.filter(category1 => {
  //   return category1.id === ids;
  // });
  // return categorys[0].title;
}

export const getProductByCategory= (ids:number) => {
  return storeProducts.filter( products => products.category ===  ids );
  // const filtered = storeProducts.filter(products => {
  //   return products.category ===  ids;
  // });
  // return filtered;
}

export const getProduct = (str:number):any => { 
  return storeProducts?.find((item)  => str === item?.id);
  // const filtered = storeProducts.filter(products => {
  //   return products.id === str;
  // });
  // return filtered[0];
}