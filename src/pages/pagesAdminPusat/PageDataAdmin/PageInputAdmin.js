import React, { useEffect, useState } from "react";
import "./PageInputAdmin.css";
import HeaderAdmin from '../../../components/Header/HeaderAdmin';
import LogoApp from '../../../components/LogoApp/LogoApp';
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import InputFormAdmin from "../../../utils/InputFormAdmin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";

const PageInputAdmin= () => {
    const [dataAdmin, setDataAdmin] = useState([]);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

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

    async function fetchDataAdminById(id) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get(`http://localhost:8000/api/Admin/${id}`)
            .then((response) => {
                setDataAdmin(response.data.admin)
            })
            .catch((error) => {
                console.log(error);
            })
        }
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const dataId = searchParams.get('id');
        if (dataId) {
            fetchDataAdminById(dataId);
        } else {
            setDataAdmin(false); //
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
                <h3> Admin|| Tambah Data </h3>
                <div className='cover_tambah_data_admin'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormAdmin editData={dataAdmin}/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputAdmin;