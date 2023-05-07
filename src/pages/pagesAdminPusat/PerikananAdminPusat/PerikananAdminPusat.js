import React from "react";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import LogoApp from "../../../components/LogoApp/LogoApp";
import DataBerandaPerikanan from "../../../components/Contents/TablePerikanan/DataBerandaPerikanan";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
const PerikananAdminPusat = () => {
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
                <div><h3>Beranda Perikanan</h3></div>
                <DropdownKecamatan/>
                <DataBerandaPerikanan/>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    )
}
export default PerikananAdminPusat;