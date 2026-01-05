import React, { useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {LifeLine} from 'react-loading-indicators'
import useFetch from './custom-hook/useFetch';
import { FaCartShopping } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import {useDispatch,useSelector} from "react-redux"
import {addItem,removeItem} from "../store/cartSlice"


const ProductList = () => {
// let [product,setproduct] = useState([ ])
// let [error,setError] = useState( "" )
// let[isLoading,setisLoading] = useState( true )                             

// useEffect(()=>{
//     fetch("http://localhost:4000/products", {method : "GET" } )
//     .then((respone)=>{
//       if(respone.ok)
//         {
//           return(respone.json());
//         } 
//         else{
//           throw new Error("Search Proper Data")
//         }
//     })
//     .then((data)=>{setproduct(data);
//     })
//     .catch( (error)=>{
//       setError(error.message);
//     })
//     .finally(()=>{
//       setisLoading(false);
//     })
// //   },[]);
let navigate = useNavigate()
let {product, error, isLoading, setproduct} = useFetch("http://localhost:4000/products");

// let customHook = useFetch();
// console.log(customHook);

let handleDelete = (id)=>{
  axios.delete(`http://localhost:4000/products/${id}`)
  .then(()=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
let newProductList = product.filter(product=>product.id !== id)

setproduct(newProductList);

  })
}

let dispatch = useDispatch()
let cartstate = useSelector((state)=>{return state.cart})

let addItemtoCart = (product)=>{
  let checkProduct = cartstate.some(cartProduct=> cartProduct.id === product.id)
  if(!checkProduct){
  dispatch( addItem(product))
  Swal.fire({
      title: "Success",
      text: "Your Product Added Successfully...",
      icon: "success",
      footer:"Keeping Shopping 😍🤩"
    });
  }
  else{
    // alert("Product Already Add... if you wnat more Quantity Add Itms on Check outs!!😃😃")
  Swal.fire({
      title: "Oops!!",
      text: "This Product Already Added 😢🥴",
      icon: "error",
      footer:"Add Other Products"
    });  
  }
}


if(isLoading){
 
  return <div> 
    <center>
   <LifeLine color="#32cd32" size="medium" text="Loading..." textColor="" />
   </center>
    </div>
}
  return (
    <div>
      <article className='PL'>
       <span>Create New Products</span>
       <span>{" "}</span>
        <Button onClick={()=>navigate("/NewProducts")}>Click Me !</Button>
      </article>
      <h1>Product-List</h1>
      { product.length!=0 && 
         <section className='product'>
        {
          product.map(product=>(
          <Card key={product.id} style={{ width: '18rem' }} className='products'>
            <center>
               <Card.Img variant="top" src={product.image} style={{ width: '9rem', height:'12rem'}} />
            </center>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <center><Card.Text>
          ${product.price}
        </Card.Text>
       </center>
      </Card.Body>
      <Card.Footer style={{display:"flex" , justifyContent:"space-evenly",alignItems:"center" }}>
        <Card.Text >
        </Card.Text>
       <Button variant="primary" onClick={()=>addItemtoCart(product)}><FaCartShopping /></Button>
         <Button variant='secondary' onClick={()=>{navigate(`/UpdateProduct/${product.id}`) } }>
          <RiEdit2Fill />
          </Button>
         <Button variant='danger' onClick={()=>{handleDelete(product.id)}}><MdDelete /></Button>

      </Card.Footer>
    </Card>))
        }
      </section>

      }

      {
        error && <p>{error}</p>
      }
    </div>

  )
}

export default ProductList