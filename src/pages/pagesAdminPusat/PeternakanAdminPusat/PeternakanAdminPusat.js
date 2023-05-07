import React from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import DataBerandaPeternakan from "../../../components/Contents/TablePeternakan/DataBerandaPeternakan";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";

const PeternakanAdminPusat = () => {
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
                <div><h3>Beranda Peternakan</h3></div>
                <DropdownKecamatan/>
                <DataBerandaPeternakan/>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    )
}
export default PeternakanAdminPusat;