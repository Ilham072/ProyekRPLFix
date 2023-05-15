import React, { useState, useEffect } from 'react';
import "./PageInputDataPertanian.css";
import SidebarAdmin from '../../../../components/Sidebar/SidebarAdmin';
import HeaderAdmin from '../../../../components/Header/HeaderAdmin';
import { Button } from "../../../../components";
import DropdownKomoditi from "../../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi";
import InputFormPertanian from "../../../../utils/Pertanian/InputFormPertanian";
import LogoApp from '../../../../components/LogoApp/LogoApp';
import DropdownBidang from "../../../../components/Dropdown/DropdownBidang/DropdownBidang";
import checkTokenExpiration from '../../../../utils/checkTokenExpiration';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PageInputDataPertanian= () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [selectedBidang, setSelectedBidang] = useState("");
    const [selectedKomoditi, setSelectedKomoditi] = useState("");

    const handleBidangChange = (value) => {
        setSelectedBidang(value);
    }

    const handleKomoditiChange = (value) => {
        setSelectedKomoditi(value);
    }

    const hortikulturaKomoditi = [
        { value: "Sayuran", label: "Sayuran" },
        { value: "Buah-buahan", label: "Buah-buahan" },
        { value: "Bunga", label: "Bunga" }
    ];

    const tanamanPanganKomoditi = [
        { value: "Padi", label: "Padi" },
        { value: "Jagung", label: "Jagung" },
        { value: "Kedelai", label: "Kedelai" }
    ];

    const perkebunanKomoditi = [
        { value: "Kelapa", label: "Kelapa" },
        { value: "Kopi", label: "Kopi" },
        { value: "Teh", label: "Teh" }
    ];

    let komoditiOptions;

    switch (selectedBidang) {
        case "Hortikultura":
        komoditiOptions = hortikulturaKomoditi;
        break;
        case "Tanaman Pangan":
        komoditiOptions = tanamanPanganKomoditi;
        break;
        case "Perkebunan":
        komoditiOptions = perkebunanKomoditi;
        break;
        default:
        komoditiOptions = [];
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
    })
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
                <h3>Pendataan || Petertanian || Tambah Data </h3>
                <div className='dropdown-tambah-data-pertanian'>
                    <DropdownBidang selectedBidang={selectedBidang} onBidangChange={handleBidangChange}/>
                    <DropdownKomoditi selectedKomoditi={selectedKomoditi}
                        onKomoditiChange={handleKomoditiChange}
                        komoditiOptions={komoditiOptions}/>
                </div>
                <div className='cover_tambah_data_pertanian'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormPertanian bidang={selectedBidang} komoditi={selectedKomoditi}/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputDataPertanian;