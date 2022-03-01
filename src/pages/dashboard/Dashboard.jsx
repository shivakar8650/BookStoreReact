import React from 'react'
import Displaybook from '../../component/displaybook/Displaybook'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'




function Dashboard() {
  return (
     <div>
     <div className='dashboard' style={{width:"100%" ,height:"100%"}}>
       <Header/>
       <Displaybook/>
       <Footer/>
     </div>
     </div>
   
    
  )
}

export default Dashboard