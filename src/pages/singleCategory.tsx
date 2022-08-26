import * as React from 'react';
import {  Typography , Container , Grid , Box } from '@mui/material';
import {  getProductByCategory } from '../data/data';
import CardGrid from './section/cardGrid';
import { useParams } from "react-router-dom";

export default function ImgMediaCard() {
  let params:any  = useParams();
  const Productslist = getProductByCategory(parseInt(params.id));
  console.log(Productslist); 
  return (
    <Container maxWidth="lg"sx={{ marginTop: '100px' }} >
        <Typography gutterBottom variant="h2" component="div">
            Products
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
         {Productslist.map((products) => {
           return (
             <>
               < CardGrid   id={products.id} imgurl={products.img} title={products.title} description={products.description} price={products.price} category={products.category}  />
             </>
           )
         })}
     </Box>
    </Container>
  );
}