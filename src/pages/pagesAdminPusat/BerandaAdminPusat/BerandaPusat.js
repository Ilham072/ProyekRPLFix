import React from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import KomoditiCategory from "../../../utils/KomoditiCategory";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import { Button } from "../../../components/Button/Button";
import CarouselNew from "../../../components/Corousel/CarouselBeranda/CarouselNew";
// import './BerandaAdmin.css';
const BerandaPusat = () => {
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
                <div><h3>Beranda</h3></div>
                <div className="isi_content">
                    <CarouselNew/>
                    <KomoditiCategory/>
                    
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default BerandaPusat;