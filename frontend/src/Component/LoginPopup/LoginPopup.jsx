import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const[currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'></div>
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='' />
         <div className='login-popup-inputs'>
            {currState==="Log in"?<></>:<input type='text' placeholder='Your name' required />}
              <input type='email' placeholder='Your email' required />
               <input type='password' placeholder='Password' required />
         </div>
         <button>{currState === "SignUp" ? "Create account" : "Login"}</button>
         <div className='login-popup-condition'>
            <input type='Checkbox' required />
            <p>By continuing, i agree to the term of use & privacy policy. </p>
         </div>
         <p>Create a new account? <span>Click here</span></p>
         <p>Already have an account?<span>Login here</span></p>
      </form>
    </div>
    
  )
}

export default LoginPopup
