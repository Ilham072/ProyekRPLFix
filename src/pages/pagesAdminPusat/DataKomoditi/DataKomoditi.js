import React, { useEffect, useState } from "react";
import "./DataKomoditi.css";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import DropdownSektor from "../../../components/Dropdown/DropdownSektor/DropdownSektor";
//import "../AdminKecematan.css";
import DaftarKomoditiPertanian from "../../../components/Contents/TablePertanian/DataKomoditiPertanian";
import DaftarKomoditiPerikanan from "../../../components/Contents/TablePerikanan/DataKomoditiPerikanan";
import DaftarKomoditiPeternakan from "../../../components/Contents/TablePeternakan/DataKomoditiPeternakan";
import DaftarKomoditiPerindustrian from "../../../components/Contents/TablePerindustrian/DataKomoditiPerindustrian";
import DaftarKomoditiPariwisata from "../../../components/Contents/TablePariwisata/DataKomoditiPariwisata";
import TambahKomoditiPeternakan from "../../../components/Card/TambahKomoditi/TambahKomoditiPeternakan";
import TambahKomoditiPertanian from "../../../components/Card/TambahKomoditi/TambahKomoditiPertanian";
import TambahKomoditiPerikanan from "../../../components/Card/TambahKomoditi/TambahKomoditiPerikanan";
import TambahKomoditiPerindustrian from "../../../components/Card/TambahKomoditi/TambahKomoditiPerindustrian";
import TambahKomoditiPariwisata from "../../../components/Card/TambahKomoditi/TambahKomoditiPariwisata";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";

const DataKomoditi = () => {
    const [sektor, setSektor] = useState("Pertanian");

    const handleSektorChange = (event) => {
        setSektor(event);
    }
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

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

    const renderTable = (sektor) => {
        switch (sektor) {
          case "Pertanian":
            return (
              <div className="Daftar-komoditi">
                <DaftarKomoditiPertanian sektor={sektor} />
                <TambahKomoditiPertanian sektor={sektor}/>
              </div>
            );
            case "Peternakan":
                return (
                  <div className="Daftar-komoditi">
                    <DaftarKomoditiPeternakan sektor={sektor}/>
                    <TambahKomoditiPeternakan sektor={sektor}/>
                  </div>
                );
            case "Perikanan":
                return (
                  <div className="Daftar-komoditi">
                    <DaftarKomoditiPerikanan sektor={sektor}/>
                    <TambahKomoditiPerikanan sektor={sektor}/>
                  </div>
                );
            case "Perindustrian":
                    return (
                    <div className="Daftar-komoditi">
                        <DaftarKomoditiPerindustrian sektor={sektor}/>
                        <TambahKomoditiPerindustrian sektor={sektor}/>
                    </div>
                    );
            case "Pariwisata":
                        return (
                        <div className="Daftar-komoditi">
                            <DaftarKomoditiPariwisata sektor={sektor}/>
                            <TambahKomoditiPariwisata sektor={sektor}/>
                        </div>
                        );
          default:
            return null;
        }
      };
      

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
                <div><h3>Data</h3></div>
                <DropdownSektor selectedSektor={sektor} onSektorChange={handleSektorChange} />
                <div><h3>Sektor {sektor? sektor : ""}</h3></div>
                {renderTable(sektor)}
            </div>
        {}
      </div>
    );
}

export default DataKomoditi;
