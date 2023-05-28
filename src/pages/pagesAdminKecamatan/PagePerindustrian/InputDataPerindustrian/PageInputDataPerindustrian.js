import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import checkTokenExpiration from '../../../../utils/checkTokenExpiration';
import "./PageInputDataPerindustrian.css";
import SidebarAdmin from '../../../../components/Sidebar/SidebarAdmin';
import HeaderAdmin from '../../../../components/Header/HeaderAdmin';
import { Button } from "../../../../components";
import DropdownKomoditi from "../../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi";
import InputFormPertanian from "../../../../utils/Pertanian/InputFormPertanian";
import LogoApp from '../../../../components/LogoApp/LogoApp';
import InputFormPerindustrian from "../../../../utils/Perindustrian/InputFormPerindustrian";


const PageInputDataPertanian= () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [selectedKomoditi, setSelectedKomoditi] = useState("");
    const [dataPerindustrian, setDataPerindustrian] = useState([]);
    const [komoditiOptions, setKomoditiOptions] = useState([]);

    const handleKomoditiChange = (value) => {
        setSelectedKomoditi(value);
    }

    async function fetchKomoditi() {
        const response = await axios.get('http://localhost:8000/api/KomoditiBySektor?sektor=Perindustrian');
        const data = response.data;
        setKomoditiOptions(data);
    } 

    useEffect(() => {
        fetchKomoditi();
    }, []);

    const komoditiPerindustrian = [
        {value: 'Batu Bara', label: 'Batu Bara'},
        {value: 'Besi', label: 'Besi'},
        {value: 'Tembaga', label: 'Tembaga'}
    ];

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

    async function fetchDataPerindustrianById(id) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get(`http://localhost:8000/api/Perindustrian/${id}`)
            .then((response) => {
                setDataPerindustrian(response.data.perindustrian)
            })
            .catch((error) => {
                console.log(error);
            })
        }
    
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const dataId = searchParams.get('id');
        if (dataId) {
            fetchDataPerindustrianById(dataId);
        } else {
            setDataPerindustrian(false); //
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
                <h3>Pendataan || Perindustrian || Tambah Data </h3>
                <div className='dropdown-tambah-data-perindustrian'>
                <DropdownKomoditi selectedKomoditi={selectedKomoditi} onKomoditiChange={handleKomoditiChange} komoditiOptions={komoditiOptions} komoditi={dataPerindustrian.komoditi}/>
                </div>
                <div className='cover_tambah_data_perindustrian'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormPerindustrian komoditi={selectedKomoditi} editData={dataPerindustrian}/>
                </div>
                <br/>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputDataPertanian;