import React, { useEffect, useState } from 'react'
import { Outlet,Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ProductList from './ProductList';
const Products = () => {
let [count,setCount] = useState(0)

  // // useEffect(()=>{
  // //   console.log("this efforts will run after the compnents resndering !!");
  // // })
  // useEffect(()=>{
  //   console.log("this efforts will run after the compnents resndering !!");
  // },[])
  // console.log("Inital render");
  
  return (
    <div>
      <ProductList></ProductList>
        <Outlet/>
    </div>
  )
}

export default Products