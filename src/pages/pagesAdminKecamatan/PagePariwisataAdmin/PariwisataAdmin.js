import React , { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import PariwisataCategory from "../../../utils/PariwisataCategory";
import DataPariwisata from "../../../components/Contents/TablePariwisata/DataPariwisata";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";
import { Button } from "../../../components";
import { Link } from "react-router-dom";
import "../AdminKecematan.css";

const PariwisataAdmin = () => {
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
                <SidebarAdmin />
            </div>
        
            <div className='content'>
                <div><h3>Beranda Pariwisata</h3></div>
                <DropdownKecamatan/>
                <PariwisataCategory/>
                <DataPariwisata/>
                <Link to='/tambahDataPariwisata'>
                    <Button className="tambahDataButton">
                        Tambah Data
                    </Button>
                </Link>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    )
}
export default PariwisataAdmin;