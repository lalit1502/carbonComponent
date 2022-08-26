import React, {createContext, useState }from 'react';
import { contextprops , componentprops , AddtocartProps } from '../components/interface';
import { getProduct } from './data';

// const ThemeContext = createContext({
//     data: [],
//     setData: () => {}
// } as any); 
//export default ThemeContext;

const ProductContext = createContext({} as contextprops);


const ProductProvider = (props:componentprops) => {

  const [data, setData] = useState<contextprops>({
    isEmpty: true,
    cart: [],
  } as any);

  const addToCart = (id:number) => {
    if(data.cart?.some((item:AddtocartProps)  => id === item?.id)){
      let product:any = data.cart?.find((item:AddtocartProps)  => id === item?.id);
      product.count += 1
      //data.cart?.find((item:AddtocartProps)  => id === item?.id)?.count+=1;
    }else{
      let product:AddtocartProps = getProduct(id); 
      product['count'] = 1; 
      data.cart?.push(product);
    }
    setData({
      ...data,
      isEmpty: false,  
    });
  };

  const increment = (id:number) => {
    if(data.cart?.some((item:AddtocartProps)  => id === item?.id)){
      let product:any = data.cart?.find((item:AddtocartProps)  => id === item?.id);
      product.count = product.count + 1;
    }
    setData({ ...data });
  }

  const decrement = (id:number) => {
    if(data.cart?.some((item:AddtocartProps)  => id === item?.id)){
      let product:any = data.cart?.find((item:AddtocartProps)  => id === item?.id);
      if(product.count === 1){
        data.cart.splice(data.cart?.indexOf(product),1)
      }else{
        product.count = product.count - 1;
      }
    }
    setData({ ...data });
  }

  const removeitem = (id:number) => {
    let product:any = data.cart?.find((item:AddtocartProps)  => id === item?.id);
    if(data.cart?.some((item:AddtocartProps)  => id === item?.id)){
      data.cart.splice(data.cart?.indexOf(product),1)
    }
    setData({ ...data }); 
  }

  const gettotal = () => {
    let Total = 0;
    data.cart?.map((item) => (Total += item.price * item.count));
    return Total
  }

  const clearCart = () => {
    data.cart = []
    data.isEmpty = true;
    setData({ ...data }); 
  }

  return (

    <ProductContext.Provider
    value={{
        ...data,
        addToCart: addToCart,
        increment: increment,
        decrement: decrement,
        removeitem: removeitem,
        gettotal: gettotal,
        clearCart: clearCart,
    }}
    >
    {props.children}
    </ProductContext.Provider>
  );
}

//const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductContext};
