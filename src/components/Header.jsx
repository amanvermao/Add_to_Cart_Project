import React from 'react'
import header from './Header.css'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi"
import { useSelector } from 'react-redux'



const Header = () => {
  const {cartItems}=useSelector (state=>state.cart)
  return (
    <div className='header'>
     <Link to={'/'} style={{color:'black'}}>Home</Link>
    <Link to={'/About'} style={{color:'black'}}>About</Link>
       
    <Link to={'/Cart'} className='h_Cart'>
      <FiShoppingBag/>
      <p>{cartItems.length}</p>
    </Link>
   

    </div>
  )
}

export default Header
