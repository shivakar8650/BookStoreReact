import React from 'react'
import Login from '../../component/login/Login'
import Signup from '../../component/signup/Signup'
import logo from '../../Assets/logo.png'
import './mainpage.scss'

export default function Mainpage() {

    const [valid, setValid] = React.useState();
    
    const loginOptions = () => {
        setValid(true);
    };
    const signupOptions = () => {
        setValid(false);
    };
  return (
  
        <div className='main-container' >
         <div className='left-image'>
             <img className="Logo" src={logo} alt="main logo"></img>
             <div className='logotitle'>ONLINE BOOK SHOPPING</div>
             <div className='rigth-login'>
                 {/* <div className='top'> */}
                 <div className='login' onClick={loginOptions}>
                     LOGIN
                 </div>
                 <div className='signup'  onClick={signupOptions}  >
                     SIGNUP
                 </div>
                 {/* </div> */}
                 <div className='conditionalcomponent'>
                 {valid ? <Login /> : <Signup />}
                 </div>
            
         </div>
         </div>
     </div>

  )
}
