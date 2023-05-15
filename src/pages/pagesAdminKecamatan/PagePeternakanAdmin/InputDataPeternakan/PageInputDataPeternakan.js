import React, { useState, useEffect } from 'react';
import "./PageInputDataPeternakan.css";
import SidebarAdmin from '../../../../components/Sidebar/SidebarAdmin';
import HeaderAdmin from '../../../../components/Header/HeaderAdmin';
import LogoApp from '../../../../components/LogoApp/LogoApp';
import InputFormPeternakan from '../../../../utils/Peternakan/InputFormPeternakan';
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from '../../../../utils/checkTokenExpiration';
import axios from 'axios';
import DropdownKomoditi from './../../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi';

const PageInputDataPeternakan= () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [selectedKomoditi, setSelectedKomoditi] = useState("");

    const handleKomoditiChange = (value) => {
        setSelectedKomoditi(value);
    }

    const peternakanKomoditi = [
        {value: 'Sapi', label: 'Sapi'},
        {value: 'Kambing', label: 'Kambing'},
        {value: 'Ayam', label: 'Ayam'},
        {value: 'Bebek', label: 'Bebek'},
    ];

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
                <div className='dropdown-tambah-data-peternakan'>
                <DropdownKomoditi selectedKomoditi={selectedKomoditi} onKomoditiChange={handleKomoditiChange} komoditiOptions={peternakanKomoditi}/>
                </div>
                <div className='cover_tambah_data_peternakan'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormPeternakan komoditi={selectedKomoditi}/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputDataPeternakan;