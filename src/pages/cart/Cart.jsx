import React, { useState } from 'react'
import './cart.scss'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import Displaycart from '../../component/displaycart/Displaycart'
import { CartServices } from '../../Services/CartServices'

export default function Cart() {


  const [cart, setcart]= React.useState(0)
  React.useEffect(()=>{
      getCart()
  },[])
  const getCart = () =>{
       console.log("cards");
    CartServices.getcart().then((result)=>{
     console.log(result); 
     setcart(result.data.data)
     console.log(result.data.data)
    
    //  setcart(result.data.data)
    }).catch(()=>{
         console.log("error");
    })
  }
  console.log(cart.length)
  return (
    <div className='cart'>
  <Header  quantity={cart.length} />
  <Displaycart   cart={cart}  getCart={getCart} />
  <Footer /> 

    </div>
  )
}