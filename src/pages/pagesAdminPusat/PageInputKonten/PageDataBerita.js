import React from "react";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import LogoApp from "../../../components/LogoApp/LogoApp";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import "./PageDataBerita.css";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import DataBerita from "../../../components/Contents/News/DataBerita";
const PageDataBerita = () => {
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
                <div><h3>Konten || Berita</h3></div>
                <div className="content-page-berita">
                    <DataBerita/>
                </div>
                <Link to="/tambahDataBerita">
                    <Button className="tambahDataButton">
                        Tambah Berita
                    </Button>
                </Link>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    )
}
export default PageDataBerita;