import React from 'react'
import cart from './Cart.css'
import { AiFillDelete } from 'react-icons/ai'

import { useDispatch, useSelector } from 'react-redux'


const Cart = () => {
  

  const { cartItems , subTotal , tax, shipping, total}= useSelector((state)=> state.cart)
  const dispatch =useDispatch();
  const increment =(id)=>{
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({type: "calculateprice",});
  }
  const decrement =(id)=>{
   
    dispatch({
      type: "decrement",
      payload: id ,
    });

    dispatch({type: "calculateprice",});
  }
  const deleteHandler =(id)=>{
    dispatch({
      type: "deleteFromCart",
      payload: id ,
    });
    dispatch({type: "calculateprice",});
  }
  return (
    <div className='cart'>
      <main>
       {
          cartItems.length>0?(
            cartItems.map((i)=>(
              <CartItem 
          imgSrc={i.imgSrc}
           name ={i.name} 
           price={i.price} 
          quantity ={i.quantity}
            id={i.id} 
            key={i.id}
            decrement={decrement}

            increment={increment}
             deleteHandler={deleteHandler}
        />
            ))
          ) : (
            <h1>no items yet</h1>
          )
        }
         
      </main>
      <aside>
        <h2>Subtotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>

      </aside>
    </div>
  )
}
const CartItem = ({ imgSrc, name, price, quantity, decrement, increment, deleteHandler, id }) => (
  <div className="cartItem">
    <img src={imgSrc} alt="items" />
    <article>
      <h3 style={{padding:"1rem"}}>{name}</h3>
      <p style={{padding:"1rem"}}>${price} </p>

    </article>
    <div>
      <button onClick={() =>decrement(id)}>-</button>
      <p>{quantity} </p>
      <button onClick={() =>increment(id) }>+</button>
    </div>
    <AiFillDelete
      onClick={() => deleteHandler(id)}
    />
  </div>
)

export default Cart
