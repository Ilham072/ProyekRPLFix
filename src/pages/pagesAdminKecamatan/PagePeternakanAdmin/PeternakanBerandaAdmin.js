import React from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import DataBerandaPeternakan from "../../../components/Contents/TablePeternakan/DataBerandaPeternakan";

const PeternakanBerandaAdmin = () => {
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
                <SidebarAdmin />
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
export default PeternakanBerandaAdmin;