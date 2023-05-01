import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./Login.css"
const Login = () => {
  const [popupStyle, showPopup] = useState("hide")

    const popup =()=>{
        showPopup("Login-popup")
        setTimeout(()=> showPopup("hide"),3000)
    }

  return (
     <div className="container-login">
        <div className="logoPemda">
          <img src="assets/images/logo/logoPemda.png"/>
        </div>
        <div className="cover">
          <h1>Login Admin</h1>
          <h3>Username</h3>
          <input type="text" placeholder="Masukkan Username"/>
          <h3>Password</h3>
          <input type="password" placeholder="Masukkan Password"/>

          <div className="login-btn2">
              <Link to='/berandaAdmin'><button onClick={popup}>Masuk</button></Link>
          </div>
        </div>
            
        <div className="login-image">
            <img src="assets/images/Login.png" alt="sumber daya alam"/>
        </div>
      </div>
                
 
  )
}

export default Login;

