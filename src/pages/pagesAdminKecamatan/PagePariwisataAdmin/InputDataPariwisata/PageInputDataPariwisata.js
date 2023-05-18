import React, { useState, useEffect } from 'react';
import "./PageInputDataPariwisata.css";
import SidebarAdmin from '../../../../components/Sidebar/SidebarAdmin';
import HeaderAdmin from '../../../../components/Header/HeaderAdmin';
import { Button } from "../../../../components";
import LogoApp from '../../../../components/LogoApp/LogoApp';
import InputFormPariwisata from "../../../../utils/Pariwisata/InputFormPariwisata";
import checkTokenExpiration from '../../../../utils/checkTokenExpiration';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DropdownPariwisata from '../../../../components/Dropdown/DropdownPariwisata/DropdownPariwisata';


const PageInputDataPariwisata= () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [selectedWisata, setSelectedWisata] = useState("");
    const [dataPariwisata, setDataPariwisata] = useState([]);

    const handleWisataChange = (value) => {
        setSelectedWisata(value);
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

    async function fetchDataPariwisataById(id) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get(`http://localhost:8000/api/Pariwisata/${id}`)
            .then((response) => {
                setDataPariwisata(response.data.pariwisata)
            })
            .catch((error) => {
                console.log(error);
            })
        }

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const dataId = searchParams.get('id');
        if (dataId) {
            fetchDataPariwisataById(dataId);
        } else {
            setDataPariwisata(false); //
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
                <h3>Pendataan || Pariwisata || Tambah Data </h3>
                <div className='dropdown-tambah-data-pariwisata'>
                <DropdownPariwisata selectedWisata={selectedWisata} onWisataChange={handleWisataChange} pariwisata={dataPariwisata.jenis_wisata}/>
                </div>
                <div className='cover_tambah_data_pariwisata'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormPariwisata jenis_wisata={selectedWisata} editData={dataPariwisata}/>
                </div>
                <br/>
                
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputDataPariwisata;