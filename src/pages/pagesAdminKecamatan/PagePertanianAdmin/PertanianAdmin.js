import React, { useEffect, useState } from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import PertanianCategory from "../../../utils/PertanianCategory";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import { Button }from "../../../components";
import DataPertanian from "../../../components/Contents/TablePertanian/DataPertanian";
import { Link } from "react-router-dom";
import "../AdminKecematan.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";
const PertanianAdmin = () => {
    const [selectedBidang, setSelectedBidang] = useState("");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleClick = (event) =>{
        console.log(event);
    }

    const handleBidangChange = (bidang) => {
        setSelectedBidang(bidang);
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
                <PertanianCategory selectedCategory={selectedBidang} onCategoryChange={setSelectedBidang}/>
                <DataPertanian bidang={selectedBidang}/>
                <Link to='/tambahDataPertanian'>
                    <Button className="tambahDataButton" onClick={handleClick}>
                        Tambah Data
                    </Button>
                </Link>
                
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default PertanianAdmin;