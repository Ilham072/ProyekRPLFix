import React from "react";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import LogoApp from "../../../components/LogoApp/LogoApp";
import DataPerikanan from "../../../components/Contents/TablePerikanan/DataPerikanan";
import { Button } from "../../../components";
import { Link } from "react-router-dom";
const PerikananAdmin = () => {
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
                <div><h3>Beranda Perikanan</h3></div>
                <DropdownKecamatan/>
                <DataPerikanan/>
                <Link to='/tambahDataPerikanan'>
                    <Button className="tambahDataButton">
                        Tambah Data
                    </Button>
                </Link>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    )
}
export default PerikananAdmin;