import React, { useEffect, useState } from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import PertanianCategory from "../../../utils/PertanianCategory";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import DataBerandaPertanian from "../../../components/Contents/TablePertanian/DataBerandaPertanian";
// import "./PagePertanian.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import kategoriPertanian from "../../../config/pertanian/kategoriPertanian.json"

const PertanianBerandaAdmin = () => {
    const [selectedKecamatan, setSelectedKecamatan] = useState("");
    const [selectedBidang, setSelectedBidang] = useState(null);
    const [bidangPertanian, setBidangPertanian] = useState([]);
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

    const fetchPertanianBidang = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get('http://localhost:8000/api/Count Pertanian');
        setBidangPertanian(response.data);
        for (let i=0; i < bidangPertanian.length; i++) {
            for (let j=0; j < bidangPertanian.length; j++) {
                if (kategoriPertanian[i].name === bidangPertanian[j].bidang) {
                    kategoriPertanian[i].count = bidangPertanian[j].count;
                }
            }
        }
    }

    useEffect(() => {
        fetchPertanianBidang();
    }, [])

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
                <PertanianCategory selectedCategory={selectedBidang} onCategoryChange={handleBidangChange} kategoriPertanian={kategoriPertanian}/>
                <DataBerandaPertanian kecamatan={selectedKecamatan} bidang={selectedBidang} />
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
    );
}

export default PertanianBerandaAdmin;