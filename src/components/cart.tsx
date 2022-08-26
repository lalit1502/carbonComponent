import React , { useContext } from "react";
//import { useCart } from "react-use-cart";
import { Table , TableBody , TableCell , TableContainer , TableHead , TableRow , Paper , IconButton , Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AddtocartProps } from "./interface"
import { ProductContext } from "../data/contextapi"
//import Swal from "sweetalert2";

const Cart = () => {
//   const {
//     isEmpty,
//     totalUniqueItems,
//     items,
//     totalItems,
//     cartTotal,
//     updateItemQuantity,
//     removeItem,
//     emptyCart
//   } = useCart();

  const value = useContext(ProductContext)
  
  // const showAlert = () => {
  //   Swal.fire({
  //     text: "Buy Successfully",
  //     icon: "success",
  //   })
  // }
  
  if (value.isEmpty) return <h1 className="text-center"> Your cart isEmpty </h1>;
  return (
  <>
    <h1>cart Page</h1>
    <section className="container1" >
      <div className="row jistufy-content-center">
        <div className="col-12">
          <h5>
            {" "}
            {/* Cart ({totalUniqueItems}) total Item :({totalItems}) */}
          </h5>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total Price</TableCell>
                    <TableCell>Action</TableCell> 
                </TableRow>
                </TableHead>
                <TableBody>
                {value.cart?.map((item:AddtocartProps, index) => {
                  let toalsubitem:number = item.price * item.count;
                return (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell  scope="row">
                    <img src={require('../assets/images/'+item?.img)} style={{ height: "6rem" }} alt="newgg99" />
                    </TableCell>
                    <TableCell>{item?.title}</TableCell> 
                    <TableCell>{item?.price}</TableCell>
                    <TableCell>{item.count}</TableCell>
                    <TableCell>{item.price * item.count}</TableCell>
                    <TableCell>
                        <IconButton aria-label="minus"  onClick={() =>{
                                    if( typeof item?.count == "number"){
                                      value.decrement?.(item.id)
                                    }
                                }
                                }  >
                            <RemoveIcon />
                        </IconButton>
                        <IconButton aria-label="Add"  onClick={() =>{
                                if( typeof item?.count == "number"){
                                  value.increment?.(item.id)
                                }
                            }
                            }  >
                            <AddIcon />
                        </IconButton>
                        <IconButton aria-label="delete"  onClick={() =>{
                                if( typeof item?.count == "number"){
                                  value.removeitem?.(item.id)
                                }
                            }}  >
                            <DeleteIcon />
                        </IconButton> 
                    </TableCell> 
                  </TableRow>
                );
               })}
                </TableBody>
            </Table>
            </TableContainer>

          <div className="col-auto ms-auto">
            <h2> total price: {value.gettotal()}</h2>
          </div>
        </div>
        <div className="col-auto mb-2">
          <Button variant="contained" color="secondary" onClick={value?.clearCart}>Clear Cart</Button> 
          &nbsp;
          {/* <Button variant="contained" color="secondary" onClick={() => showAlert()} >Buy Now </Button>  */}
        </div>
      </div>
    </section>
  </>
  );
};

export default Cart;
