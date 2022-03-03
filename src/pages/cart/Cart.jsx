import React, { useState } from 'react'
import './cart.scss'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import Displaycart from '../../component/displaycart/Displaycart'
import { CartServices } from '../../Services/CartServices'

export default function Cart() {

  const [ quantity , setQuantity ] = React.useState(0)
  const [cart, setcart]= React.useState(0)
  React.useEffect(()=>{
      getCart()
  },[])
  const getCart = () =>{
       console.log("cards");
       CartServices.getcart().then((result)=>{
     console.log(result); 
     setQuantity(result.data.data.lenght)
     setcart(result.data.data)
    }).catch(()=>{
         console.log("error");
    })
  }
  console.log(quantity)
  return (
    <div className='cart'>
    
  <Header  quantity={quantity} />
  <Displaycart   cart={cart}  getCart={getCart} />
  <Footer /> 

    </div>
  )
}