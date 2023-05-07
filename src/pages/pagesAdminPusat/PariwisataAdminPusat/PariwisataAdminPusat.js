import React from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import PariwisataCategory from "../../../utils/PariwisataCategory";
import DataBerandaPariwisata from "../../../components/Contents/TablePariwisata/DataBerandaPariwisata";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";



const PariwisataAdminPusat = () => {
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
                <div><h3>Beranda Pariwisata</h3></div>
                <DropdownKecamatan/>
                <PariwisataCategory/>
                <DataBerandaPariwisata/>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    )
}
export default PariwisataAdminPusat;