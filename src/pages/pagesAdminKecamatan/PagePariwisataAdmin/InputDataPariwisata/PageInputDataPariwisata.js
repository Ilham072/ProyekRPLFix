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
import DropdownKomoditi from '../../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi';


const PageInputDataPariwisata= () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [selectedWisata, setSelectedWisata] = useState("");
    const [dataPariwisata, setDataPariwisata] = useState([]);
    const [komoditiOptions, setKomoditiOptions] = useState([]);
    const [selectedKomoditi, setSelectedKomoditi] = useState("");
    const kecamatan = localStorage.getItem('kecamatan');

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

    const handleKomoditiChange = (value) => {
        setSelectedKomoditi(value);
    }

    // const fetchWisata = async (wisata) => {
        
    //     try {
    //       const response = await axios.get(`http://localhost:8000/api/KomoditiBySektor?sektor=Pariwisata&bidang=${wisata}&kecamatan=${kecamatan}`);
    //       const data = response.data;
    //       setKomoditiOptions(data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    // useEffect(() => {
    //     if (selectedWisata) {
    //         fetchWisata(selectedWisata);
    //     }
    //     console.log(komoditiOptions);
    // }, [selectedWisata]);

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
        await axios.get(`${process.env.REACT_APP_API_URL}/api/Pariwisata ${id}`)
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
                <DropdownKomoditi selectedKomoditi={selectedKomoditi} onKomoditiChange={handleKomoditiChange} komoditi={dataPariwisata.nama_wisata} pariwisata={true} bidang={selectedWisata} sektor='Pariwisata' kecamatan={kecamatan}/>
                </div>
                <div className='cover_tambah_data_pariwisata'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormPariwisata jenis_wisata={selectedWisata} nama_wisata={selectedKomoditi} editData={dataPariwisata}/>
                </div>
                <br/>
                
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputDataPariwisata;