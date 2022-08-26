import * as React from 'react';
import { Typography , Container , Grid ,Box  } from '@mui/material';
import CardGrid from './cardGrid';
import { storeProducts } from '../../data/data';
//import { setting } from "../../components/setting";

export default function ImgMediaCard() {
  return (
    <Container maxWidth="lg"sx={{ marginTop: '100px' }} >
       <Typography gutterBottom variant="h2" component="div">
            Products
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            {storeProducts.map((products) => {
              return (
                <>
                  < CardGrid   id={products.id} imgurl={products.img} title={products.title} description={products.description} price={products.price } category={products.category}  />
                </>
              )
            })}
        </Box>
    </Container>
    
  );
}
