import React, { useState, useEffect, useMemo } from 'react';
import "./PageInputDataPertanian.css";
import SidebarAdmin from '../../../../components/Sidebar/SidebarAdmin';
import HeaderAdmin from '../../../../components/Header/HeaderAdmin';
import { Button } from "../../../../components";
import DropdownKomoditi from "../../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi";
import InputFormPertanian from "../../../../utils/Pertanian/InputFormPertanian";
import LogoApp from '../../../../components/LogoApp/LogoApp';
import DropdownBidang from "../../../../components/Dropdown/DropdownBidang/DropdownBidang";
import checkTokenExpiration from '../../../../utils/checkTokenExpiration';
import { useNavigate, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

const PageInputDataPertanian= () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [selectedBidang, setSelectedBidang] = useState("");
    const [selectedKomoditi, setSelectedKomoditi] = useState("");
    const [komoditiOptions, setKomoditiOptions] = useState([]);
    const [dataPertanian, setDataPertanian] = useState([]);
    //const editData = JSON.parse(localStorage.getItem('editData'));    

    const handleBidangChange = (value) => {
        setSelectedBidang(value);
    }

    const handleKomoditiChange = (value) => {
        setSelectedKomoditi(value);
    }

    const fetchKomoditi = async () => {
        if (selectedBidang) {
            try {
          const response = await axios.get(`http://localhost:8000/api/KomoditiBySektor?sektor=Pertanian&bidang=${selectedBidang}`);
          const data = response.data;
          setKomoditiOptions(data);
            } catch (error) {
                console.log(error);
            }
        }
        
      }

    useEffect(() => {
        fetchKomoditi();
    }, [selectedBidang]);

    const handleClick = (event) =>{
        console.log(event);
    }

    async function fetchDataPertanianById(id) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get(`http://localhost:8000/api/Pertanian/${id}`)
            .then((response) => {
                setDataPertanian(response.data.pertanian)
            })
            .catch((error) => {
                console.log(error);
            })
        }

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const dataId = searchParams.get('id');
        if (dataId) {
            fetchDataPertanianById(dataId);
        } else {
            setDataPertanian(false); //
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
                    <DropdownBidang selectedBidang={selectedBidang} onBidangChange={handleBidangChange} bidang={dataPertanian.bidang}/>
                    <DropdownKomoditi selectedKomoditi={selectedKomoditi}
                        onKomoditiChange={handleKomoditiChange}
                        komoditiOptions={komoditiOptions} komoditi={dataPertanian.komoditi}/>
                </div>
                <div className='cover_tambah_data_pertanian'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormPertanian bidang={selectedBidang} komoditi={selectedKomoditi} editData={dataPertanian}/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputDataPertanian;