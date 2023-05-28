import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import KomoditiCategory from "../../../utils/KomoditiCategory";
// import './BerandaAdmin.css';
import checkTokenExpiration from './../../../utils/checkTokenExpiration';
import CarouselNew from "../../../components/Corousel/CarouselBeranda/CarouselNew";
const BerandaAdmin = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    
    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get('http://localhost:8000/api/adminkecamatan')
        .then((response) => {
            setUser(response.data);
            // const decodeToken = jwt.decode(token);
            //console.log(decoded);
            // console.log(decodeToken);
            console.log(response.data);
        })
    }

    // useEffect(() => {
    //     if(!token) {
    //         navigate('/login');
    //     }

    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     const isTokenExpired = checkTokenExpiration();
    //     if(isTokenExpired) {
    //         localStorage.clear();
    //         navigate('/login');
    //     }
    // });
    return (
        <div className='container'>
            <div className='logo'>
                <div>
                    <LogoApp />
                </div>
            </div>
            <div className='header'>
                <div>
                    <HeaderAdmin />
                </div>
            </div>
            <div className='nav'>
                <SidebarAdmin />
            </div>
        
            <div className='content'>
                <div><h3>Beranda</h3></div>
                <div className="isi_content">
                    <CarouselNew/>
                    <KomoditiCategory/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default BerandaAdmin;