import React, { useState, useEffect, useRef } from 'react';
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import { Button } from "../../../components";
import { Link } from "react-router-dom";
import "./PageKontenKomoditi.css";
import DataKomoditiArtikel from "../../../components/Contents/Komoditi/DataKomoditiArtikel";
import checkTokenExpiration from '../../../utils/checkTokenExpiration';
import { useNavigate, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

const PageKontenKomoditi = () => {
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
                <SidebarAdminPusat />
            </div>
        
            <div className='content'>
            <div className="content-page-berita">
                    <DataKomoditiArtikel/>
                </div>
                <div className="tambah-konten-komoditi">
                    <Link to='/inputKontenKomoditi'>
                            <Button className="TambahKontenKomoditi">
                              Tambah Konten Komoditi
                            </Button>
                    </Link>
                </div>
            </div>
            
        {}
      </div>
    );
}

export default PageKontenKomoditi;