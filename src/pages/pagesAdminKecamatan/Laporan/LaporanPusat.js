import React from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import DataBerandaPertanian from "../../../components/Contents/TablePertanian/DataBerandaPertanian";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import { Button } from "../../../components/Button/Button";
import "./Laporan.css";
import DropdownSektor from "../../../components/Dropdown/DropdownSektor/DropdownSektor";
import DropdownTahun from "../../../components/Dropdown/DropdownTahun/DropdownTahun";

const LaporanPusat = () => {

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
                    <DropdownSektor />
                    <DropdownTahun/>
                </div>
                <DataBerandaPertanian/>
                <div className="button_download">
                        <Button className="btn-pdf">
                            <img src="assets/icon/button/icon_pdf.svg"/> Pdf
                        </Button>
                        <Button className="btn-excel">
                            <img src="assets/icon/button/icon_excel.svg"/> Excel
                        </Button>
                </div>
                
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default LaporanPusat;