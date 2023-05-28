import React, { useState, useEffect } from 'react';
import "./PageInputDataPerikanan.css";
import SidebarAdmin from '../../../../components/Sidebar/SidebarAdmin';
import HeaderAdmin from '../../../../components/Header/HeaderAdmin';
import { Button } from "../../../../components";
import LogoApp from '../../../../components/LogoApp/LogoApp';
import InputFormPerikanan from "../../../../utils/Perikanan/InputFormPerikanan";
import DropdownKomoditi from "../../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi";
import checkTokenExpiration from '../../../../utils/checkTokenExpiration';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PageInputDataPerikanan= () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [selectedKomoditi, setSelectedKomoditi] = useState("");
    const [dataPerikanan, setDataPerikanan] = useState([]);
    const [komoditiOptions, setKomoditiOptions] = useState([]);

    const handleKomoditiChange = (value) => {
        setSelectedKomoditi(value);
    }

    async function fetchKomoditi() {
        const response = await axios.get('http://localhost:8000/api/KomoditiBySektor?sektor=Perikanan');
        const data = response.data;
        setKomoditiOptions(data);
    } 

    useEffect(() => {
        fetchKomoditi();
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

    async function fetchDataPerikananById(id) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get(`http://localhost:8000/api/Perikanan/${id}`)
            .then((response) => {
                setDataPerikanan(response.data.perikanan)
            })
            .catch((error) => {
                console.log(error);
            })
        }

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const dataId = searchParams.get('id');
        console.log(dataId)
        if (dataId) {
            fetchDataPerikananById(dataId);
        } else {
            setDataPerikanan(false);
        }   
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
                <h3>Pendataan || Petertanian || Tambah Data </h3>
                <div className='dropdown-tambah-data-perikanan'>
                <DropdownKomoditi selectedKomoditi={selectedKomoditi} onKomoditiChange={handleKomoditiChange} komoditiOptions={komoditiOptions} komoditi={dataPerikanan.komoditi}/>
                </div>
                <div className='cover_tambah_data_perikanan'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormPerikanan komoditi={selectedKomoditi} editData={dataPerikanan}/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputDataPerikanan;