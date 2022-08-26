import  React , { useContext }  from 'react';
import { Card , CardActions , CardContent , CardMedia , Button , Typography , Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { getCategory  } from '../../data/data';
//import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
import  { ProductContext }  from '../../data/contextapi';
//import {Getdata} from '../App'
import { ImgMediaCardProps } from '../../components/interface'

export default function ImgMediaCard(props:ImgMediaCardProps) {
  //const { addItem } = useCart();
  //const {data, setData} = useContext(ThemeContext);
  const value = useContext(ProductContext)

  // function AddTOCart(data1:any){
  //   setData(data1)
  //   console.log(data1 )
  // }

  const showAlert = () => {
    Swal.fire({
      text: "Product Added To Cart Successfully",
      icon: "success",
      confirmButtonText: "OK",
    }).then(function () {
      value.addToCart?.(props.id);
      //console.log(value)
    });
  }

  return (
    <Box gridColumn="span 4" key={props.id}>
    <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={require('../../assets/images/'+props.imgurl)}
        />
        <CardContent>
            <Link to={`/single/${props.id}`} >
            <Typography gutterBottom variant="h5" component="div">
            {props.title}
            </Typography>
            </Link>
            <Typography gutterBottom variant="body2" component="div">
              Category: <Link to={`/category/${props.category}`} >{getCategory(props.category)}</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.description.substring(0, 90)+"..."}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
            Price :  {props.price} $
            </Typography>
        </CardContent>
        <CardActions className='addtocarddiv'>
            {/* <Button size="small" onClick={()=> addToCart(5) }>Add To Cart</Button> */}
            <Button variant="contained" color="secondary" onClick={() => showAlert()} >Add to Cart</Button>  
        </CardActions>
    </Card>
    </Box>
  );
}