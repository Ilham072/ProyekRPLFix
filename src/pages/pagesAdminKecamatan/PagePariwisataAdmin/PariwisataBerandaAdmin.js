import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import PariwisataCategory from "../../../utils/PariwisataCategory";
import DataBerandaPariwisata from "../../../components/Contents/TablePariwisata/DataBerandaPariwisata";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";
import { Link } from "react-router-dom";
import { Button } from "../../../components";



const PariwisataBerandaAdmin = () => {
    const [selectedKecamatan, setSelectedKecamatan] = useState("");
    const [selectedJenisWisata, setSelectedJenisWisata] = useState("");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleKecamatanChange = (value) => {
        setSelectedKecamatan(value);
    }

    const handleJenisWisataChange = (value) => {
        const jenis_wisata = value.substring(value.indexOf(" ") + 1);
        console.log(jenis_wisata)
        setSelectedJenisWisata(jenis_wisata);
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
                <SidebarAdmin />
            </div>
        
            <div className='content'>
                <div><h3>Beranda Pariwisata</h3></div>
                <DropdownKecamatan selectedKecamatan={selectedKecamatan} onKecamatanChange={handleKecamatanChange}/>
                <PariwisataCategory selectedCategory={selectedJenisWisata} onCategoryChange={handleJenisWisataChange}/>
                <DataBerandaPariwisata kecamatan={selectedKecamatan} jenis_wisata={selectedJenisWisata}/>
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
export default PariwisataBerandaAdmin;