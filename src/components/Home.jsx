import React from 'react'
import home from './Home.css'
import macbook from '../assets/macBook.jpg'
import shose from '../assets/shose.jpg'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const Home = () => {
  
        


   const productList =[
    {name: "Mac Book",
    price: 12000 ,
    imgSrc: macbook ,
     id:"dfefrf",
    },
    {name: "Black Shoos",
    price: 1300,
    imgSrc: shose ,
     id:"dfefr",
    }
  ];


  const dispatch =useDispatch()
  
  const addToCartHandler=(options)=>{
  
  dispatch({type:'addToCart', payload:options})
  dispatch({type: "calculateprice",});
  toast.success("Added To Cart")

  };

  return (
    <div className='home'>
    {
      productList.map((i)=>(
        <ProductCard 
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}

          />
      ))
    }
       
    </div>
  )
}


const ProductCard =( {name , id , price, handler, imgSrc})=>(
 <div className='ProductCard'>
 <img src={imgSrc} alt={name} />
 <p> {name} </p>
 <h4>${price}</h4>
 <button onClick={()=> handler( {name,price,id, quantity: 1, imgSrc})} >Add to Cart</button>

 </div>
);

export default Home
