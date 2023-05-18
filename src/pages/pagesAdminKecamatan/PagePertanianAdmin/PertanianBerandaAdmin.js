import React, { useEffect, useState } from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import PertanianCategory from "../../../utils/PertanianCategory";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import DataBerandaPertanian from "../../../components/Contents/TablePertanian/DataBerandaPertanian";
import "./PagePertanian.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";

const PertanianBerandaAdmin = () => {
    const [selectedKecamatan, setSelectedKecamatan] = useState("");
    const [selectedBidang, setSelectedBidang] = useState(null);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleKecamatanChange = (value) => {
        setSelectedKecamatan(value);
    }

    const handleBidangChange = (value) => {
        setSelectedBidang(value);
    }

    const handleClick = (event) =>{
        console.log(event);
    }

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
                <SidebarAdmin />
            </div>
        
            <div className='content'>
                <div><h3>Beranda Pertanian</h3></div>
                <DropdownKecamatan selectedKecamatan={selectedKecamatan} onKecamatanChange={handleKecamatanChange}/>
                <PertanianCategory selectedCategory={selectedBidang} onCategoryChange={handleBidangChange}/>
                <DataBerandaPertanian kecamatan={selectedKecamatan} bidang={selectedBidang} />
                
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default PertanianBerandaAdmin;