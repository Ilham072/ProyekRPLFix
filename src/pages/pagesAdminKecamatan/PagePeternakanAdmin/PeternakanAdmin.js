import React from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import DataPeternakan from "../../../components/Contents/TablePeternakan/DataPeternakan";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import "../AdminKecematan.css";
const PeternakanAdmin = () => {
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
                <DataPeternakan/>
                <Link to="/tambahDataPeternakan">
                    <Button className="tambahDataButton">
                        Tambah Data
                    </Button>
                </Link>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    )
}
export default PeternakanAdmin;