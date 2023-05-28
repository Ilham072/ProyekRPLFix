import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import LogoApp from "../../../components/LogoApp/LogoApp";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import "./PageDataBerita.css";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import DataBerita from "../../../components/Contents/News/DataBerita";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";

const PageDataBerita = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            navigate('/login')
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, []);

    useEffect(() => {
        const isTokenExpired = checkTokenExpiration();
        if(isTokenExpired) {
            localStorage.clear();
            navigate('/login');
        }
    });
    return(
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
                <SidebarAdminPusat />
            </div>
        
            <div className='content'>
                <div><h3>Konten || Berita</h3></div>
                <div className="content-page-berita">
                    <DataBerita/>
                </div>
                <Link to="/tambahDataBerita">
                    <Button className="tambahDataButton">
                        Tambah Berita
                    </Button>
                </Link>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    )
}
export default PageDataBerita;