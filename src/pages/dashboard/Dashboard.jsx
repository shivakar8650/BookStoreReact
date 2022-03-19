import React, { useState } from 'react'
import Displaybook from '../../component/displaybook/Displaybook'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import { CartServices } from '../../Services/CartServices'

function Dashboard() {

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
    }).catch(()=>{
         console.log("error");
    })
  }
  console.log(cart.length)
// const [cart ,setCart] = React.useState([])
  
// const getCart = () => {
//   CartServices.getcart().then((result) => {
//   console.log(result);
//   setCart(result.data.data)
//   })
// }
  return ( 
     <div>
     <div className='dashboard' style={{width:"100%" ,height:"100%"}}>
       <Header quantity={cart.length} />
       <Displaybook cart={cart.length}  getCart={getCart}/>
       {/* <Displaybook /> */}
       <Footer/>
     </div>
     </div>
   
    
  )
}

export default Dashboard