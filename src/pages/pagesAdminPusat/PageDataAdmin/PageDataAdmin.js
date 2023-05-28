import React , { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import { Button } from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import "../AdminPusat.css";
import DataAdmin from "../../../components/Contents/Admin/DataAdmin";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";

const PageDataAdmin = () => {
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
                <div><h3>Admin</h3></div>
                <DataAdmin/>
                <Link to="/tambahAdmin">
                    <Button className="tambahDataButton">
                        Tambah Admin
                    </Button>
                </Link>    
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default PageDataAdmin;