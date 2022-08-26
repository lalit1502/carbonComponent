import React from 'react'
{/*used in header*/}
export interface navItemsProps {
    path: string;
    name: string;
}

{/*used in multirangeslider*/}
export interface MultiRangeSliderProps {
    min: number;
    max: number;
    onChange:any;
}

{/*used in setting*/}
export interface settingProps {
    unit: string;
}

{/*used in Cardgrid , singleproduct , cart */}
export interface ImgMediaCardProps { 
    id:number;
    imgurl?: string;
    title: string;
    description: string;
    price: number;
    category: string | number;
}

{/*used in shop*/}
export interface inputProps {
    All?:string|undefined;
    minPrice?: number|undefined;
    maxPrice?: number|undefined;
    category?: number|undefined;
}

{/* used in shop page ,data */}
export interface storeProductsProps {
    id: number;
    title: string;
    img:string;
    description: string;
    price: number;
    category: string | number;
}

{/* used in contextapi , cart*/}
export interface AddtocartProps {
    id: number;
    title: string;
    img:string;
    description: string;
    price: number;
    category: string | number;
    count:number;
}


{/*used in data*/}
export interface CategoryProps {
    id: number;
    title: string;
}

{/*used in constextapi*/}
export interface contextprops {
    isEmpty: boolean,
    cart?: any[];
    addToCart?:(id:number) => void;
    increment?:(id:number) => void;
    decrement?:(id:number) => void;
    removeitem?:(id:number) => void;
    clearCart?:() => void;
    gettotal:() => number;    
}

{/*used in contextapi */}
export interface componentprops {
    children: React.ReactNode;
};