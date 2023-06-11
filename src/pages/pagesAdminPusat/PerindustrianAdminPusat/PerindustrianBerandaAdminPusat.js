import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import DataBerandaPerindustrian from "../../../components/Contents/TablePerindustrian/DataBerandaPerindustrian";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";

const PerindustrianBerandaAdminPusat = () => {
    const [selectedKecamatan, setSelectedKecamatan] = useState("");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleKecamatanChange = (value) => {
        setSelectedKecamatan(value);
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
                <div><h3>Beranda Perindustrian</h3></div>
                <DropdownKecamatan selectedKecamatan={selectedKecamatan} onKecamatanChange={handleKecamatanChange}/>
                <DataBerandaPerindustrian kecamatan={selectedKecamatan}/>
                <div className="container-button-tambah-data">
                    <Link to="/berandaAdmin">
                        <Button className="BackButton">
                            Kembali 
                        </Button>
                    </Link>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    )
}
export default PerindustrianBerandaAdminPusat;