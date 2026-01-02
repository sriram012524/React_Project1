import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCartShopping } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { removeItem } from '../store/cartSlice';

const WishList = () => {

  let cartProducts = useSelector((state)=>{ return state.cart})
  console.log(cartProducts);
  let dispatch =  useDispatch();
let handleDelete = (reduItemid)=>{
  dispatch(removeItem(reduItemid))
}

  return (
    <div>
     
      <h1>Product-List</h1>
      { cartProducts.length!==0 ? (
         <section className='product'>
        {
          cartProducts.map(product=>(
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
         <Button variant='danger' onClick={()=>{handleDelete(product.id)}}>{ " " }<MdDelete />{ " " }</Button>

      </Card.Footer>
    </Card>))
        }
      </section>
      ):
      <h1>Please Add Something</h1>
      }

    </div>
  )
}

export default WishList