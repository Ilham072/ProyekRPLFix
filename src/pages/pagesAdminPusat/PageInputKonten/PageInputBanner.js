import React from "react";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import LogoApp from "../../../components/LogoApp/LogoApp";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import DataBanner from "../../../components/Corousel/DataBanner";
import InputFormBanner from "../../../utils/InputFormBanner";
import "./PageInputBanner.css";
const PageInputBanner = () => {
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
                <div><h3>Konten || Banner</h3></div>
                <div className="content-page-banner">
                    <div className='cover-data-banner'>
                        <DataBanner/>
                    </div>
                    <div className='cover_tambah_data_banner'>
                        <InputFormBanner/>
                    </div>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    )
}
export default PageInputBanner;