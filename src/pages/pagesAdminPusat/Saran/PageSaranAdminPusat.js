import React , {useEffect, useState }from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import Header from "../../../components/Header/Header";
// import "./Beranda.css";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import HasilSaranPusat from "../../../components/Contents/Saran/Hasil SaranPusat";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";

const PageSaranAdminPusat = () => {
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
        const response = await axios.get('http://localhost:8000/api/Saran');
        console.log(response.data)
        setDataSaran(response.data);
      }
      
      fetchDataSaran();
    }, []);

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
          <SidebarAdminPusat />
        </div>
        
        <div className='content'>
          <div><h3>Saran</h3></div>
            <div className="isi_content">
                <HasilSaranPusat saranData={dataSaran}/>
            </div>
        </div>
        

        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default PageSaranAdminPusat;