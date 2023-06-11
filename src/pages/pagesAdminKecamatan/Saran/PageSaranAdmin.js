import React, { useEffect, useState } from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import Header from "../../../components/Header/Header";
// import "./Beranda.css";
import InputFormSaran from "../../../components/Contents/Saran/InputFormSaran";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import HasilSaran from "../../../components/Contents/Saran/HasilSaran";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";

const PageSaranAdmin = () => {
  const [dataSaran, setDataSaran] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
    
    useEffect(() => {
        const isTokenExpired = checkTokenExpiration();
        if(isTokenExpired) {
            localStorage.clear();
            navigate('/login');
        }
    });

    useEffect(() => {
        if(!token) {
            navigate('/login')
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, []);

    useEffect(() => {
      async function fetchDataSaran() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Saran`);
        console.log(response.data)
        setDataSaran(response.data);
      }
      
      fetchDataSaran();
    }, [])

    return (
      <div className='container'>
        <div className='logo'>
          <div>
            <LogoApp />
          </div>
        </div>
        <div className='header'>
          <div>
            <Header />
          </div>
        </div>
        <div className='nav'>
          <SidebarAdmin />
        </div>
        
        <div className='content'>
          <div><h3>Saran</h3></div>
            <div className="isi_content">
                <HasilSaran saranData={dataSaran}/>
            </div>
        </div>
        

        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default PageSaranAdmin;