import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Login from './Components/login'
import Products from './Components/Products'
import ProductList from './Components/ProductList'
import ProductsDetail from './Components/ProductsDetail'
import {BrowserRouter as Router,Routes,Route, Link } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import Notfound from './Components/Notfound'
import NewProducts from './Components/newProducts'
import UpdateProduct from './Components/UpdateProduct'


function App() {
  let user = "Sriram" 
  return (
    <div className='app'> 
    
    <Router>
    <NavBar/>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/Products'element={<Products/>}/>
        <Route index element={<ProductList/>  }/>
        <Route path='list' element={<ProductList/>}/>
        <Route path='details' element={<ProductsDetail/>}/>
        <Route path='/login/:user'element={<Login/>} />
        <Route path='/NewProducts' element={<NewProducts/>} />
        <Route path= '/UpdateProduct/:id' element={<UpdateProduct/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </Router>
      </div>
    
   
  );
}

export default App
