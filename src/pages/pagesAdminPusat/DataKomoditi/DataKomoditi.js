import React, { useState } from "react";
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

const DataKomoditi = () => {
    const [sektor, setSektor] = useState("pertanian");
    

    const handleSektorChange = (event) => {
        setSektor(event.target.value);
    }

    const renderTable = () => {
        switch (sektor) {
          case "pertanian":
            return (
              <div className="Daftar-komoditi">
                <DaftarKomoditiPertanian />
                <TambahKomoditiPertanian />
              </div>
            );
            case "peternakan":
                return (
                  <div className="Daftar-komoditi">
                    <DaftarKomoditiPeternakan />
                    <TambahKomoditiPeternakan />
                  </div>
                );
            case "perikanan":
                return (
                  <div className="Daftar-komoditi">
                    <DaftarKomoditiPerikanan />
                    <TambahKomoditiPerikanan />
                  </div>
                );
            case "perindustrian":
                    return (
                    <div className="Daftar-komoditi">
                        <DaftarKomoditiPerindustrian />
                        <TambahKomoditiPerindustrian />
                    </div>
                    );
            case "pariwasata":
                        return (
                        <div className="Daftar-komoditi">
                            <DaftarKomoditiPariwisata />
                            <TambahKomoditiPariwisata />
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
                <DropdownSektor value={sektor} onChange={handleSektorChange} />
                <div><h3>Sektor {sektor.charAt(0).toUpperCase() + sektor.slice(1)}</h3></div>
                {renderTable()}
            </div>
        {}
      </div>
    );
}

export default DataKomoditi;
