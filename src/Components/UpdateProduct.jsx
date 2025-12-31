import React, { useEffect, useState } from 'react'
import {Button, Grid, Paper, TextField, Typography} from "@mui/material"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {LifeLine} from 'react-loading-indicators'

const UpdateProduct = () => {
     let paperStyle = {
        width :400,
        margin : "20px auto",
        padding : "20px"

    }

//      {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   }

let [updateProduct, setUpadateProduct] = useState(null);

let {id} = useParams()
let navigate = useNavigate()

useEffect(()=>{
    axios.get(`http://localhost:4000/products/${id}`)
    .then(res => setUpadateProduct(res.data ))
},[]);

let handleChange = (e)=>{
let {value, name} = e.target
let fieldName = name.split("rating.")[1]

if(name.includes("rating.")){
setUpadateProduct({
    ...updateProduct,
    rating:{
        ...updateProduct.rating,
        [fieldName]  : value
    }
})
}else{
setUpadateProduct({
    ...updateProduct,
    [name] : value

})
}
}

let handleUpdate = (e)=>{
    e.preventDefault();
    fetch(`http://localhost:4000/products/${id}`,{
        method : "PUT",
        headers :  {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(updateProduct)
    })
    .then(()=>{
        alert("Saved Successfully !!!")
        navigate("/Products")
    });
}
if(updateProduct!==null){
 return (
    <Paper elevation={20} style={paperStyle}>
        <Typography variant='h5' textAlign={'center'} style={{margin : "10px 0" }}>Update Product </Typography>
        <Grid component="form" style={{display:"grid", gap:"20px"}} onSubmit={handleUpdate} >
            <TextField value={updateProduct.title} name ="title" label="Title" variant='outlined' focused fullWidth onChange={handleChange} color='success' />
            <TextField value ={updateProduct.category} name ="category" label="Category" variant='outlined' focused fullWidth onChange={handleChange} color='success'/>
            <Grid container spacing = {2}>
                <Grid size={6}>
                     <TextField value ={updateProduct.rating.rate} name ="rating.rate" type='number' label="Rate" variant='outlined' focused onChange={handleChange} color='success' />
                </Grid>
                 <Grid size={6}>
                     <TextField value ={updateProduct.rating.count}  name ="rating.count" type='number' label="Count" variant='outlined' focused onChange={handleChange} color='success' />
                </Grid>
            </Grid>
            <Button type = "submit" variant="contained" fullWidth color='success'>Save</Button>
        </Grid>
    </Paper>
  );
}else{
<div> 
    <center>
   <LifeLine color="#32cd32" size="medium" text="Loading..." textColor="" />
   </center>
    </div>
}


 
}

export default UpdateProduct