import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"
const Login = () => {
  const [popupStyle, showPopup] = useState("hide")

  const popup =()=>{
      showPopup("Login-popup")
      setTimeout(()=> showPopup("hide"),3000)
  }
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, formData)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('kecamatan', response.data.user.kecamatan);
        if (response.data.role === "kecamatan"){
          navigate('/berandaAdmin');
        } else if (response.data.role === "pusat") {
          navigate('/berandaAdminPusat');
        }
      })
      .catch((error) => {
        setValidation(error.response.data);
      })
    }

  return (
     <div className="container-login">
         <div className="logoPemda">
            <img src="assets/images/logo/logoPemda.png"/>
          </div>
        <div className='container_form_login'>
          <div className="cover">
            <h1>Login Admin</h1>
            <h3>Username</h3>
            {
              validation.message && (
                <div className="alert-danger">
                  {validation.message}
                </div>
              )
            }
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Masukkan Username"/>
            {
              validation.username && (
                <div className="alert-danger">
                  {validation.username[0]}
                </div>
              )
            }
            <h3>Password</h3>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
            {
              validation.password && (
                <div className="alert-danger">
                  {validation.password[0]}
                </div>
              )
            }
            <div className="login-btn2">
                <button onClick={loginHandler}>Masuk</button>
            </div>
          </div>
        </div>
            
        <div className="login-image">
            <img src="assets/images/Login.png" alt="sumber daya alam"/>
        </div>
      </div>
                
 
  )
}

export default Login;

