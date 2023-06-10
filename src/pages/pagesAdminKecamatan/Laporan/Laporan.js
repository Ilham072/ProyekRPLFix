import React, { useState, useEffect } from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import DataBerandaPertanian from "../../../components/Contents/TablePertanian/DataBerandaPertanian";
import DataBerandaPeternakan from "../../../components/Contents/TablePeternakan/DataBerandaPeternakan";
import DataBerandaPerikanan from "../../../components/Contents/TablePerikanan/DataBerandaPerikanan";
import DataBerandaPerindustrian from "../../../components/Contents/TablePerindustrian/DataBerandaPerindustrian";
import DataBerandaPariwisata from "../../../components/Contents/TablePariwisata/DataBerandaPariwisata";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import { Button } from "../../../components/Button/Button";
import "./Laporan.css";
import DropdownSektor from "../../../components/Dropdown/DropdownSektor/DropdownSektor";
import DropdownTahun from "../../../components/Dropdown/DropdownTahun/DropdownTahun";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";
import { saveAs } from 'file-saver';

const Laporan = () => {
    const [Sektor, setSektor] = useState('');
    const [selectedTahun, setSelectedTahun] = useState(0);
    const [selectedTable, setSelectedTable] = useState(null); // Tambahkan state untuk menyimpan komponen tabel yang dipilih

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        const isTokenExpired = checkTokenExpiration();
        if (isTokenExpired) {
            localStorage.clear();
            navigate('/login');
        }
    });

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, []);

    const renderSelectedTable = (Sektor) => {
        switch (Sektor) {
          case "Pertanian":
            return (
              <>
                <DataBerandaPertanian sektor={Sektor} />
              </>
            );
          case "Peternakan":
            return (
              <>
                <DataBerandaPeternakan sektor={Sektor} />
              </>
            );
          case "Perikanan":
            return (
              <>
                <DataBerandaPerikanan sektor={Sektor} />
              </>
            );
          case "Perindustrian":
            return (
              <>
                <DataBerandaPerindustrian sektor={Sektor} />
              </>
            );
          case "Pariwisata":
            return (
              <>
                <DataBerandaPariwisata sektor={Sektor} />
              </>
            );
          default:
            return null;
        }
      };

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
                <LogoApp />
            </div>
            <div className='header'>
                <HeaderAdmin />
            </div>
            <div className='nav'>
                <SidebarAdminPusat />
            </div>

            <div className='content'>
                <div><h3>Laporan</h3></div>
                <div className='dropdown-laporan'>
                    <DropdownSektor Sektor={Sektor} onSektorChange={setSektor} />
                    <DropdownTahun selectedTahun={selectedTahun} onTahunChange={setSelectedTahun} />
                </div>
                <div style={{ width: "100%" }}>{renderSelectedTable(Sektor)}</div>
                <div className="button_download">
                    <Button className="btn-pdf" onClick={() => downloadPDF(Sektor, selectedTahun)}>
                        <img src="assets/icon/button/icon_pdf.svg" /> Pdf
                    </Button>
                    <Button className="btn-excel" onClick={() => downloadExcel(Sektor, selectedTahun)}>
                        <img src="assets/icon/button/icon_excel.svg" /> Excel
                    </Button>
                </div>

            </div>
            {/* <div className='footer'>footer</div> */}
        </div>
    );
}

export default Laporan;
