import React, { useEffect, useState } from "react";
import "./PageInputKontenKomoditi.css";
import HeaderAdmin from '../../../components/Header/HeaderAdmin';
import DropdownKomoditi from "../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi";
import LogoApp from '../../../components/LogoApp/LogoApp';
import DropdownSektor from "../../../components/Dropdown/DropdownSektor/DropdownSektor";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import InputFormKontenKomoditi from "../../../utils/InputFormKontenKomoditi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";

const PageInputKontenKomoditi= () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [selectedSektor, setSelectedSektor] = useState("");
    const [selectedKomoditi, setSelectedKomoditi] = useState("");
    const [dataKontenKomoditi, setDataKontenKomoditi] = useState([]);

    const handleSektorChange = (value) => {
        setSelectedSektor(value);
    }

    const handleKomoditiChange = (value) => {
        setSelectedKomoditi(value);
    }

    const komoditiOptions = [
        { value: "Sayuran", label: "Sayuran" },
        { value: "Buah-buahan", label: "Buah-buahan" },
        { value: "Bunga", label: "Bunga" },
        { value: "Padi", label: "Padi" },
        { value: "Jagung", label: "Jagung" },
        { value: "Kedelai", label: "Kedelai" },
        { value: "Kelapa", label: "Kelapa" },
        { value: "Kopi", label: "Kopi" },
        { value: "Sapi", label: "Sapi" },
        { value: "Ikan Windu", label: "Ikan Windu" },
        { value: "Tembaga", label: "Tembaga" },
        { value: "Tanjung Pallette", label: "Tanjung Pallette" },
    ];

    async function fetchDataKontenKomoditiById(id) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get(`http://localhost:8000/api/Konten Komoditi/${id}`)
            .then((response) => {
                setDataKontenKomoditi(response.data.konten_komoditi)
            })
            .catch((error) => {
                console.log(error);
            })
        }
    
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const dataId = searchParams.get('id');
        if (dataId) {
            fetchDataKontenKomoditiById(dataId);
        } else {
            setDataKontenKomoditi(false); 
        }
        
    }, []);

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

    const handleClick = (event) =>{
        console.log(event);
    }
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
                <div className='dropdown-tambah-konten-komoditi'>
                    <DropdownSektor selectedSektor={selectedSektor} onSektorChange={handleSektorChange} sektor={dataKontenKomoditi.sektor}/>
                    <DropdownKomoditi selectedKomoditi={selectedKomoditi} onKomoditiChange={handleKomoditiChange} komoditiOptions={komoditiOptions} komoditi={dataKontenKomoditi.judul}/>
                </div>
                <div className='cover_tambah_konten_komoditi'>
                    <h1 className='judul_tambah_konten_komoditi'></h1>
                    <InputFormKontenKomoditi sektor={selectedSektor} komoditi={selectedKomoditi} editData={dataKontenKomoditi}/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>


    )
}

export default PageInputKontenKomoditi;