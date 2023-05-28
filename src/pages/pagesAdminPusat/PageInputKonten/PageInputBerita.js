import React, { useEffect, useState } from "react";
import "./PageInputBerita.css";
import HeaderAdmin from '../../../components/Header/HeaderAdmin';
import DropdownKomoditi from "../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi";
import LogoApp from '../../../components/LogoApp/LogoApp';
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import InputFormBerita from "../../../utils/InputFormBerita";
import DropdownSektor from "../../../components/Dropdown/DropdownSektor/DropdownSektor"
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";

const PageInputBerita= () => {
    const [selectedKecamatan, setSelectedKecamatan] = useState("");
    const [selectedSektor, setSelectedSektor] = useState("");
    const [dataBerita, setDataBerita] = useState([]);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const editData = JSON.parse(localStorage.getItem('editData'));

    const handleKecamatanChange = (value) => {
        setSelectedKecamatan(value);
    }

    const handleSektorChange = (value) => {
        setSelectedSektor(value);
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
    });

    async function fetchDataBeritaById(id) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get(`http://localhost:8000/api/Konten Berita/${id}`)
            .then((response) => {
                setDataBerita(response.data.konten_berita)
            })
            .catch((error) => {
                console.log(error);
            })
        }

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const dataId = searchParams.get('id');
        if (dataId) {
            fetchDataBeritaById(dataId);
        } else {
            setDataBerita(false); 
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
                <SidebarAdminPusat />
            </div>
        
            <div className='content'>
                <h3>Pendataan || Petertanian || Tambah Data </h3>
                <div className='dropdown-tambah-data-berita'>
                    <DropdownSektor selectedSektor={selectedSektor} onSektorChange={handleSektorChange} sektor={dataBerita.sektor}/>
                    <DropdownKecamatan selectedKecamatan={selectedKecamatan} onKecamatanChange={handleKecamatanChange} kecamatan={dataBerita.kecamatan}/>
                </div>
                <div className='cover_tambah_data_berita'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormBerita sektor={selectedSektor} kecamatan={selectedKecamatan} editData={dataBerita}/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputBerita;