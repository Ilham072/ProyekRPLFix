import React, {useState, useEffect} from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import DataBerandaPertanian from "../../../components/Contents/TablePertanian/DataBerandaPertanian";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import { Button } from "../../../components/Button/Button";
import "./Laporan.css";
import DropdownSektor from "../../../components/Dropdown/DropdownSektor/DropdownSektor";
import DropdownTahun from "../../../components/Dropdown/DropdownTahun/DropdownTahun";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";
import { saveAs } from 'file-saver';

const LaporanPusat = () => {
    const [selectedSektor, setSelectedSektor] = useState('');
    const [selectedTahun, setSelectedTahun] = useState(0);

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    
    useEffect(() => {
        const isTokenExpired = checkTokenExpiration();
        if(isTokenExpired) {
            localStorage.clear();
            navigate('/login');
        }
    });

    useEffect(() => {
        if(!token) {
            navigate('/login')
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, []);

    const downloadPDF = async (sektor, tahun) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        try {
            const response = await axios.get(`http://localhost:8000/api/${sektor} ${tahun}/pdf`, {
                responseType: 'blob', // Set response type to 'blob'
            });
            saveAs(response.data, `Laporan ${sektor} tahun ${tahun}`);
            
        } catch (error) {
            console.log(error);
        }
    };

    const downloadExcel = async (sektor, tahun) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        try {
            const response = await axios.get(`http://localhost:8000/api/${sektor} ${tahun}/xslx`, {
                responseType: 'blob', // Set response type to 'blob'
            });
            saveAs(response.data, `Laporan ${sektor} tahun ${tahun}`);
            
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
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
                <div><h3>Laporan</h3></div>
                <div className='dropdown-laporan'>
                    <DropdownSektor selectedSektor={selectedSektor} onSektorChange={setSelectedSektor}/>
                    <DropdownTahun selectedTahun={selectedTahun} onTahunChange={setSelectedTahun}/>
                </div>
                <DataBerandaPertanian/>
                <div className="button_download">
                        <Button className="btn-pdf" onClick={() => downloadPDF(selectedSektor, selectedTahun)}>
                            <img src="assets/icon/button/icon_pdf.svg"/> Pdf
                        </Button>
                        <Button className="btn-excel" onClick={() => downloadExcel(selectedSektor, selectedTahun)}>
                            <img src="assets/icon/button/icon_excel.svg"/> Excel
                        </Button>
                </div>
                
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default LaporanPusat;