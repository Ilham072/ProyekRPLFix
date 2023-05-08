import React, { useState } from "react";
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

const DataKomoditi = () => {
    const [sektor, setSektor] = useState("pertanian");

    const handleSektorChange = (event) => {
        setSektor(event.target.value);
    }

    const renderTable = () => {
        switch (sektor) {
            case "pertanian":
                return <DaftarKomoditiPertanian />;
            case "peternakan":
                return <DaftarKomoditiPeternakan />;
            case "perikanan":
                return <DaftarKomoditiPerikanan />;
            case "perindustrian":
                return <DaftarKomoditiPerindustrian />;
            case "pariwisata":
                return <DaftarKomoditiPariwisata />;
            default:
                return null;
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
                <div><h3>Data</h3></div>
                <DropdownSektor value={sektor} onChange={handleSektorChange} />
                <div><h3>Sektor {sektor.charAt(0).toUpperCase() + sektor.slice(1)}</h3></div>
                {renderTable()}
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default DataKomoditi;
