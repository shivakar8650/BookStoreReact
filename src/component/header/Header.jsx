import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import bookimage from '../../Assets/education.png'
import './header.scss'
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
function Header(props) {

  const navigate = useNavigate();
  
  const cart = ()=>{
    navigate('/cart')
}
const home = ()=>{
  navigate('/dashbord')
}

  return (<> 
  <div className='headerPage'>
  <img className='image' src={bookimage} alt='this is book logo'  onClick={()=>home()} />
  <p className='imagetitle' >Bookstore</p>
  <div className='searchbar'>
      <SearchOutlinedIcon htmlColor="grey"/>
      <input type='search' className='search' placeholder='Search...'></input>
  </div>
  <div className='details'>
      <div className='icon'>
          <PermIdentityTwoToneIcon htmlColor="white"/>
       </div>
       <div className='person'>shiva</div>
  </div>
  <div className="details-cart" onClick={()=>cart()}>
          <div className="">
          <Badge badgeContent={props.quantity} color="primary">
            <ShoppingCartOutlinedIcon htmlColor="white" />
            </Badge>
          </div>
          <div className="cart">Cart</div>
        </div>
</div>
</>
    
  )
}

export default Header