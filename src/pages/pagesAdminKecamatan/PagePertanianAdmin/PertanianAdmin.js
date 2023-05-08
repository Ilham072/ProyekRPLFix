import React from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import PertanianCategory from "../../../utils/PertanianCategory";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import { Button }from "../../../components";
import DataPertanian from "../../../components/Contents/TablePertanian/DataPertanian";
import { Link } from "react-router-dom";
import "../AdminKecematan.css";
const PertanianAdmin = () => {

    const handleClick = (event) =>{
        console.log(event);
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
                <SidebarAdmin />
            </div>
        
            <div className='content'>
                <div><h3>Beranda Pertanian</h3></div>
                <DropdownKecamatan/>
                <PertanianCategory/>
                <DataPertanian/>
                <Link to='/tambahDataPertanian'>
                    <Button className="tambahDataButton" onClick={handleClick}>
                        Tambah Data
                    </Button>
                </Link>
                
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default PertanianAdmin;